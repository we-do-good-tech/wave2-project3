import { useBoolean } from 'ahooks';
import React, { FC, useCallback, useMemo, useState, useEffect } from 'react';
import { IDisabilitiesSubCategory } from '../consts';
import styles from './styles.module.scss';
import classnames from 'classnames';
import plusImage from '../../../images/plus.svg';
import closeImage from '../../../images/line.svg';

interface IDisabilityCategory {
  title: string;
  subcategories: IDisabilitiesSubCategory[];
  onSubCategoryChose: (disablitity: IDisabilitiesSubCategory, deleteOne?: number) => void;
}

export const DisabilityCategory: FC<IDisabilityCategory> = ({ title, subcategories, onSubCategoryChose }) => {
  const [stateIds, setStateIds] = useState<number[]>([]);
  const [isOpen, { toggle: toggleOpen }] = useBoolean(false);

  //changeTheMainState
  useEffect(() => {
    stateIds.sort((a: number, b: number) => b - a);
    const categoryToState = subcategories.filter(
      (subCategory: IDisabilitiesSubCategory) => subCategory.id === stateIds[0],
    );
    if (categoryToState[0]?.id) {
      onSubCategoryChose(categoryToState[0]);
    } else {
      onSubCategoryChose(categoryToState[0], subcategories[0].categoryId);
    }
  }, [stateIds]);

  //Check combinations of body parts - for example: one hand + one leg => one hand and one leg combination
  const translateValues = (model: number[], incomingId?: number) => {
    model = replaceValuesInArr(model, [], []);

    if (model.includes(2) && incomingId === 1) {
      model = replaceValuesInArr(model, [], [2]);
    }
    if (model.includes(1) && incomingId === 2) {
      model = replaceValuesInArr(model, [], [1]);
    }
    if (model.includes(4) && incomingId === 3) {
      model = replaceValuesInArr(model, [], [4]);
    }
    if (model.includes(3) && incomingId === 4) {
      model = replaceValuesInArr(model, [], [3]);
    }

    if (model.includes(1) && model.includes(3)) {
      model.push(5);
    } else {
      model = replaceValuesInArr(model, [], [5]);
    }

    if (model.includes(2) && model.includes(4)) {
      model.push(6);
    } else {
      model = replaceValuesInArr(model, [], [6]);
    }

    if (model.includes(1) && model.includes(4)) {
      model.push(6);
    } else {
      model = replaceValuesInArr(model, [], [6]);
    }

    if (model.includes(2) && model.includes(3)) {
      model.push(7);
    } else {
      model = replaceValuesInArr(model, [], [7]);
    }

    if (model.includes(2) && model.includes(4)) {
      model.push(8);
    } else {
      model = replaceValuesInArr(model, [], [8]);
    }

    model = replaceValuesInArr(model, [], []);
    return model;
  };

  const clickHandler = useCallback(
    (subCategory: IDisabilitiesSubCategory) => {
      const model = stateIds.concat();
      if (subCategory.categoryId === 1) {
        if (model.includes(subCategory.id)) {
          const removedModel = model.filter((val: number) => val !== subCategory.id);
          setStateIds(translateValues(removedModel));
        } else {
          model.push(subCategory.id);
          setStateIds(translateValues(model, subCategory.id));
        }
      } else {
        if (model.includes(subCategory.id)) {
          const removedModel = model.filter((val: number) => val !== subCategory.id);
          setStateIds(translateValues(removedModel));
        } else {
          setStateIds([subCategory.id]);
        }
      }
    },
    [stateIds, setStateIds, subcategories, translateValues],
  );

  const replaceValuesInArr = (arr: number[], valuesToEnter: number[], valuesToDelete: number[]) => {
    let model = arr.filter((val: number) => !valuesToDelete.includes(val));
    model = model.concat(valuesToEnter);
    const uniqueValues: number[] = [];
    model.forEach((val: number) => !uniqueValues.includes(val) && uniqueValues.push(val));
    return uniqueValues;
  };

  const renderedSubCategories = useCallback(
    () =>
      !isOpen
        ? undefined
        : subcategories.map((subCategory: IDisabilitiesSubCategory) =>
            subCategory.hide ? undefined : (
              <div className={styles.subCategory}>
                <input
                  key={subCategory.id}
                  type='checkbox'
                  checked={stateIds.includes(subCategory.id)}
                  onClick={() => clickHandler(subCategory)}
                />
                <span>{subCategory.title}</span>
              </div>
            ),
          ),
    [subcategories, isOpen, stateIds, clickHandler],
  );

  return (
    <div className={classnames(styles.container, isOpen && styles.openContainer)}>
      <div className={styles.categoryContainer}>
        <span className={styles.title}>{title}</span>
        <img
          src={isOpen ? closeImage : plusImage}
          alt='down-arrow'
          className={classnames(styles.dropDownToggle, isOpen && styles.openDropdownToggle)}
          onClick={() => toggleOpen()}
        />
      </div>
      {renderedSubCategories()}
    </div>
  );
};
