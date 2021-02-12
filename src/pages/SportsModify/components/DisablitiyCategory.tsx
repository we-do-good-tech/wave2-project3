import { useBoolean } from 'ahooks';
import React, { FC, useEffect, useState } from 'react';
import { IDisabilitiesSubCategory } from '../consts';
import styles from './styles.module.scss';
import classnames from 'classnames';
import plusImage from '../../../images/plus.svg';
import closeImage from '../../../images/line.svg';

interface IDisabilityCategory {
  title: string;
  subcategories: IDisabilitiesSubCategory[];
  onSubCategoryChose: (disablitity: IDisabilitiesSubCategory) => void;
}

export const DisabilityCategory: FC<IDisabilityCategory> = ({ title, subcategories, onSubCategoryChose }) => {
  const [chosenSubcategory, setChosenSubcategory] = useState<IDisabilitiesSubCategory | undefined>();
  const [isOpen, { toggle: toggleOpen }] = useBoolean(false);

  useEffect(() => {
    chosenSubcategory && onSubCategoryChose(chosenSubcategory);
  }, [chosenSubcategory]);

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
      {isOpen &&
        subcategories.map((subCategory: IDisabilitiesSubCategory) => (
          <div className={styles.subCategory}>
            <input
              type='checkbox'
              checked={subCategory.id === chosenSubcategory?.id}
              onClick={() => {
                if (subCategory.id === chosenSubcategory?.id) {
                  setChosenSubcategory(undefined);
                  onSubCategoryChose(subCategory);
                } else setChosenSubcategory(subCategory);
              }}
            />
            <span>{subCategory.title}</span>
          </div>
        ))}
    </div>
  );
};
