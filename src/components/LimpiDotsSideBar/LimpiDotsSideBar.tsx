import React, { FC } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { limpiHomeComponents } from '../../pages/LimpiHome/consts';
import { useScrollPosition } from 'react-use-scroll-position';
import { toInteger } from 'lodash';
import { jumpTo } from '../../utils/jumpTo';

export const LimpiDotsSideBar: FC = () => {
  const { y: scrollTopPosition } = useScrollPosition();
  const customerWindowHeight = window.innerHeight;
  const currentActiveIdx = toInteger(scrollTopPosition / (customerWindowHeight * 0.8));

  const renderedDots = limpiHomeComponents.map((_, idx) => (
    <div className={classnames(styles.dot, idx === currentActiveIdx && styles.activeDot)} onClick={() => jumpTo(idx)} />
  ));

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBar}>{renderedDots}</div>
    </div>
  );
};
