import React, { FC } from 'react';
import styles from './styles.module.scss';
import { useBoolean } from 'ahooks';
import burgerImage from '../../images/menu.svg';
import classnames from 'classnames';
import { LimpiDotsSideBar } from '../LimpiDotsSideBar';

export const LimpiBurgerSideBar: FC = () => {
  const [isSideBarShow, { toggle: toggleSideBar }] = useBoolean(false);

  return (
    <div className={classnames(styles.burgerSideBarContainer, isSideBarShow && styles.wideContainer)}>
      <img src={burgerImage} className={styles.openButton} alt='burger' onClick={() => toggleSideBar()} />
      <div className={styles.dotsContainer}>
        <LimpiDotsSideBar showTitles={isSideBarShow} />
      </div>
    </div>
  );
};
