import React, { FC, useCallback, useMemo, useState } from 'react';
import { DisabilityCategory } from './components';
import {
  disabilitiesCategories,
  disabilitiesSubCategoris,
  IDisabilitiesCategory,
  IDisabilitiesSubCategory,
  ISportCategory,
  SportCateories,
} from './consts';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { SportLogo } from './components/SportLogo';
import { toInteger } from 'lodash';
import { SportPopup } from '../../components/SportPopup/SportPopup';
import { Icon } from '../../components/Icon';
import closeImage from '../../images/close.svg';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';
import { ApplicationState } from '../../reducers';

const { resetDisability, setDisability } = allActions.disabilityActions;

//check if there are not matching values in two arrays
const checkValid = (arrOne: number[], arrTwo: number[]) => {
  let flag = true;
  arrOne.forEach((id: number) => {
    if (arrTwo.includes(id)) flag = false;
  });
  return flag;
};

export const SportsModify: FC = () => {
  const { disabilityState } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();
  const [activeSports, setActiveSports] = useState<ISportCategory[]>(SportCateories);
  const activeSportIds = useMemo(() => activeSports.map((_: ISportCategory) => _.id), [activeSports]);
  const [currentOpen, setCurrentOpen] = useState<number | undefined>();
  const [activePopup, setActivePopup] = useState<ISportCategory | undefined>();
  const toggleOpen = useCallback(
    (id: number) => (currentOpen === id ? setCurrentOpen(undefined) : setCurrentOpen(id)),
    [currentOpen, setCurrentOpen],
  );

  //reset disablities
  const reset = useCallback(() => {
    dispatch(resetDisability());
    setActiveSports(SportCateories);
  }, [dispatch]);

  const getColor = (num: number) => {
    switch (num) {
      case 0:
        return 'green';
      case 1:
        return 'orange';
      case 2:
        return 'turqiz';
      default:
        return 'blue';
    }
  };

  const SportLogos = useMemo(
    () => (
      <div className={styles.SportIcons}>
        <h6 className={styles.wasFound}>נמצאו {activeSportIds.length} ענפי ספורט מתאימים</h6>
        {!!activePopup && (
          <SportPopup backgroundColor={getColor(toInteger((activePopup.id - 1) / 6))}>
            <img
              src={closeImage}
              alt='burger'
              className={styles.closeButton}
              onClick={() => setActivePopup(undefined)}
            />
            <div className={styles.popupBody}>
              <h1>{activePopup.title}</h1>
              <p>
                {activePopup.description}
                <span>
                  הענף נשמע לכם מעניין? <br /> פנו ל
                  <a href='https://isad.org.il/' rel='noreferrer' target='_blank'>
                    התאחדות הישראלית לספורט נכים
                  </a>{' '}
                  וגלו איפה אפשר להשתתף!
                </span>
              </p>
              <Icon type={activePopup.name} />
            </div>
          </SportPopup>
        )}
        {SportCateories.map((sportCategory: ISportCategory, idx: number) => {
          return (
            <SportLogo
              type={sportCategory.name}
              key={idx}
              name={sportCategory.title}
              disabled={!activeSportIds.includes(sportCategory.id)}
              color={getColor(toInteger((sportCategory.id - 1) / 6))}
              onClick={() => (!!activePopup ? setActivePopup(undefined) : setActivePopup(sportCategory))}
            />
          );
        })}
      </div>
    ),
    [activeSportIds, activePopup],
  );

  const changeDisability = useCallback(
    (disablitity: IDisabilitiesSubCategory, deleteOne?: number) => {
      const model: Record<number, number> = disabilityState;
      if (disablitity?.id) {
        const { categoryId, id: subCetegoryId } = disablitity;
        model[categoryId] = disabilitiesSubCategoris[subCetegoryId - 1]?.id;
      }
      if (deleteOne) {
        delete model[deleteOne];
      }
      dispatch(setDisability(model));

      const wouldBeActiveSports = SportCateories.filter((category: ISportCategory) =>
        checkValid(category.categoryIds, Object.values(model)),
      );

      setActiveSports(wouldBeActiveSports);
    },
    [disabilityState, dispatch],
  );

  const RightSideMenu = useCallback(() => {
    return (
      <div className={styles.sideMenu}>
        <h1>התאמת ענף ספורט לפי סיווג</h1>
        <hr />
        <div className={classnames('d-flex flex-column', styles.chooseMenu)}>
          <div>
            {disabilitiesCategories.map((category: IDisabilitiesCategory, idx: number) => (
              <DisabilityCategory
                title={category.title}
                key={idx}
                isOpen={currentOpen === category.id}
                toggleOpen={toggleOpen}
                subcategories={disabilitiesSubCategoris.filter(
                  (subCategory: IDisabilitiesSubCategory) => subCategory.categoryId === category.id,
                )}
                onSubCategoryChose={changeDisability}
              />
            ))}
          </div>
        </div>
        <button className={styles.resetButton} onClick={reset}>
          איפוס
        </button>
      </div>
    );
  }, [changeDisability, currentOpen, toggleOpen, reset]);

  return (
    <div className={styles.fullContainer}>
      <div className={styles.titleContainer}>
        <h1>מצאו את ענפי הספורט המתאימים לכם</h1>
        <h2>בלחיצה על כל אחד תקבלו מידע נוסף</h2>
      </div>
      <div className={styles.container}>
        {RightSideMenu()}
        {SportLogos}
      </div>
    </div>
  );
};
