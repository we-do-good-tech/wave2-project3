import React, { FC, useEffect, useMemo, useState } from 'react';
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

export const SportsModify: FC = () => {
  const [state, setState] = useState({});
  const [activeSports, setActiveSports] = useState<ISportCategory[]>(SportCateories);

  //check if there are not matching disablities ids
  const checkValid = (arrOne: number[], arrTwo: number[]) => {
    let flag = true;
    arrOne.forEach((id: number) => {
      if (arrTwo.includes(id)) flag = false;
    });
    return flag;
  };

  // change the categoryId state to the right subCategoryId
  const changeDisablity = (disablitity: IDisabilitiesSubCategory) => {
    const { categoryId, id: subCetegoryId } = disablitity;
    const model: any = state;
    if (model) {
      if (model[categoryId] === disablitity.id) model[categoryId] = undefined;
      else model[categoryId] = disabilitiesSubCategoris[subCetegoryId - 1].id;
    }
    setState(model);
    const wouldBeActiveSports = SportCateories.filter((category: ISportCategory) =>
      checkValid(category.categoryIds, Object.values(model)),
    );
    setActiveSports(wouldBeActiveSports);
  };

  //rendered the active sports
  const activeIds = useMemo(() => {
    return activeSports.map((sport: ISportCategory) => sport.id);
  }, [activeSports]);

  //reset disablities
  const reset = () => {
    setState({});
    setActiveSports(SportCateories);
  };

  useEffect(() => {
    console.log(activeSports);
  }, [activeSports]);

  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>
        <h1>התאמת ענף ספורט לפי סיווג</h1>
        <hr />
        <div className={classnames('d-flex flex-column', styles.chooseMenu)}>
          {disabilitiesCategories.map((category: IDisabilitiesCategory) => (
            <DisabilityCategory
              title={category.title}
              subcategories={disabilitiesSubCategoris.filter(
                (subCategory: IDisabilitiesSubCategory) => subCategory.categoryId === category.id,
              )}
              onSubCategoryChose={changeDisablity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
