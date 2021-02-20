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

export const SportsModify: FC = () => {
  const [state, setState] = useState({});
  const [activeSports, setActiveSports] = useState<ISportCategory[]>(SportCateories);
  const activeSportIds = useMemo(() => activeSports.map((activeSport: ISportCategory) => activeSport.id), [
    activeSports,
  ]);

  const [activePopup, setActivePopup] = useState<ISportCategory | undefined>();

  //check if there are not matching disablities ids
  const checkValid = (arrOne: number[], arrTwo: number[]) => {
    let flag = true;
    arrOne.forEach((id: number) => {
      if (arrTwo.includes(id)) flag = false;
    });
    return flag;
  };

  //reset disablities
  const reset = () => {
    setState({});
    setActiveSports(SportCateories);
  };

  const getColor = useCallback((num: number) => {
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
  }, []);

  const SportLogos = useMemo(
    () => (
      <div className={styles.SportIcons}>
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
              <Icon type={activePopup.name} />
            </div>
          </SportPopup>
        )}
        {SportCateories.map((sportCategory: ISportCategory, idx: number) => {
          return (
            <SportLogo
              type={sportCategory.name}
              key={idx}
              disabled={!activeSportIds.includes(sportCategory.id)}
              color={getColor(toInteger((sportCategory.id - 1) / 6))}
              onClick={() => (!!activePopup ? setActivePopup(undefined) : setActivePopup(sportCategory))}
            />
          );
        })}
      </div>
    ),
    [getColor, activeSportIds, activePopup],
  );

  const changedisability = useCallback(
    (disablitity: IDisabilitiesSubCategory, deleteOne?: number) => {
      const model: any = state;
      if (disablitity?.id) {
        const { categoryId, id: subCetegoryId } = disablitity;
        model[categoryId] = disabilitiesSubCategoris[subCetegoryId - 1]?.id;
      }
      if (deleteOne) {
        delete model[deleteOne];
      }

      setState(model);
      const wouldBeActiveSports = SportCateories.filter((category: ISportCategory) =>
        checkValid(category.categoryIds, Object.values(model)),
      );
      setActiveSports(wouldBeActiveSports);
    },
    [state],
  );

  const rightSideMenu = useCallback(() => {
    return (
      <div className={styles.sideMenu}>
        <h1>התאמת ענף ספורט לפי סיווג</h1>
        <hr />
        <div className={classnames('d-flex flex-column', styles.chooseMenu)}>
          {disabilitiesCategories.map((category: IDisabilitiesCategory, idx: number) => (
            <DisabilityCategory
              title={category.title}
              key={idx}
              subcategories={disabilitiesSubCategoris.filter(
                (subCategory: IDisabilitiesSubCategory) => subCategory.categoryId === category.id,
              )}
              onSubCategoryChose={changedisability}
            />
          ))}
        </div>
      </div>
    );
  }, [changedisability]);

  return (
    <div className={styles.fullContainer}>
      <div className={styles.titleContainer}>
        <h1>מצאו את ענפי הספורט המתאימים לכם</h1>
        <h2>בלחיצה על כל אחד תקבלו מידע נוסף</h2>
      </div>
      <div className={styles.container}>
        {rightSideMenu()}
        {SportLogos}
      </div>
    </div>
  );
};
