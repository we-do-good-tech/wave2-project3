import React, { FC, useCallback, useState, useEffect } from 'react';
import { IDisabilitiesSubCategory } from '../consts';
import styles from './styles.module.scss';
import classnames from 'classnames';
import plusImage from '../../../images/plus.svg';
import closeImage from '../../../images/line.svg';

interface IDisabilityCategory {
  title: string;
  subcategories: IDisabilitiesSubCategory[];
  isOpen: boolean;
  toggleOpen: (id: number) => void;
  onSubCategoryChose: (disablitity: IDisabilitiesSubCategory, deleteOne?: number) => void;
}

export const DisabilityCategory: FC<IDisabilityCategory> = ({
  title,
  subcategories,
  onSubCategoryChose,
  isOpen,
  toggleOpen,
}) => {
  const [stateIds, setStateIds] = useState<number[]>([]);

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

  const clickHandler = useCallback(
    (subCategory: IDisabilitiesSubCategory) => {
      const translateValues = (translateModel: number[], incomingId?: number) => {
        translateModel = replaceValuesInArr(translateModel, [], []);

        if (translateModel.includes(2) && incomingId === 1) {
          translateModel = replaceValuesInArr(translateModel, [], [2]);
        }
        if (translateModel.includes(1) && incomingId === 2) {
          translateModel = replaceValuesInArr(translateModel, [], [1]);
        }
        if (translateModel.includes(4) && incomingId === 3) {
          translateModel = replaceValuesInArr(translateModel, [], [4]);
        }
        if (translateModel.includes(3) && incomingId === 4) {
          translateModel = replaceValuesInArr(translateModel, [], [3]);
        }

        if (translateModel.includes(1) && translateModel.includes(3)) {
          translateModel.push(5);
        } else {
          translateModel = replaceValuesInArr(translateModel, [], [5]);
        }

        if (translateModel.includes(2) && translateModel.includes(4)) {
          translateModel.push(6);
        } else {
          translateModel = replaceValuesInArr(translateModel, [], [6]);
        }

        if (translateModel.includes(1) && translateModel.includes(4)) {
          translateModel.push(6);
        } else {
          translateModel = replaceValuesInArr(translateModel, [], [6]);
        }

        if (translateModel.includes(2) && translateModel.includes(3)) {
          translateModel.push(7);
        } else {
          translateModel = replaceValuesInArr(translateModel, [], [7]);
        }

        if (translateModel.includes(2) && translateModel.includes(4)) {
          translateModel.push(8);
        } else {
          translateModel = replaceValuesInArr(translateModel, [], [8]);
        }

        translateModel = replaceValuesInArr(translateModel, [], []);
        return translateModel;
      };
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
    [stateIds, setStateIds],
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
        : subcategories.map((subCategory: IDisabilitiesSubCategory, idx: number) =>
            subCategory.hide ? undefined : (
              <div className={styles.subCategory} key={idx} onClick={() => clickHandler(subCategory)}>
                <input
                  key={subCategory.id}
                  type='checkbox'
                  className={classnames(subCategory.categoryId !== 1 && 'rounded')}
                  checked={stateIds.includes(subCategory.id)}
                  onChange={() => {
                    return;
                  }}
                />
                <span>{subCategory.title}</span>
              </div>
            ),
          ),
    [subcategories, isOpen, stateIds, clickHandler],
  );

  return (
    <div className={classnames(styles.container, isOpen && styles.openContainer)}>
      <div className={styles.categoryContainer} onClick={() => toggleOpen(subcategories[0].categoryId)}>
        <span className={styles.title}>{title}</span>
        <div className={styles.left}>
          {stateIds.length > 0 && <span className={styles.indicator}>{stateIds.length > 2 ? 2 : stateIds.length}</span>}
          <img
            src={isOpen ? closeImage : plusImage}
            alt='down-arrow'
            className={classnames(styles.dropDownToggle, isOpen && styles.openDropdownToggle)}
          />
        </div>
      </div>
      {renderedSubCategories()}
    </div>
  );
};
