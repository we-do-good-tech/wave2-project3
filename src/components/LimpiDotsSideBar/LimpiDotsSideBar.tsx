import React, { FC, useCallback, useMemo } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { limpiHomeComponents } from '../../pages/LimpiHome/consts';
import { useScrollPosition } from 'react-use-scroll-position';
import { toInteger } from 'lodash';
import { useUpdateEffect } from 'ahooks';

export const LimpiDotsSideBar: FC = () => {
  const { y: scrollTopPosition } = useScrollPosition();
  const customerWindowHeight = window.innerHeight;
  const currentActiveIdx = toInteger(scrollTopPosition / customerWindowHeight);

  const jumpTo = (idx: number) => {
    const jumpLocation = idx * customerWindowHeight;
    window.scrollTo({ top: jumpLocation, left: 0, behavior: 'smooth' });
  };

  const renderedDots = limpiHomeComponents.map((router, idx) => (
    <div className={classnames(styles.dot, idx === currentActiveIdx && styles.activeDot)} onClick={() => jumpTo(idx)} />
  ));

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBar}>{renderedDots}</div>
    </div>
  );
};
