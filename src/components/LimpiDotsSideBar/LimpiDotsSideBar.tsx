import React, { FC, useCallback, useMemo } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { limpiHomeComponents } from '../../pages/LimpiHome/consts';
import { useScrollPosition } from 'react-use-scroll-position';
import { toInteger } from 'lodash';
import { jumpTo } from '../../utils/jumpTo';

export const LimpiDotsSideBar: FC = () => {
  const { y: scrollTopPosition } = useScrollPosition();

  const { scrollHeight, scrollTop } = document.scrollingElement ?? { scrollHeight: 1, scrollTop: 0 };

  const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const percentage = useMemo(() => (scrollTop / winHeightPx) * 100, [scrollHeight, scrollTop]);

  const sideBarClick = useCallback((e) => {
    const clickPercentage = e.clientY / window.screen.availHeight;
    const { clientHeight } = document.scrollingElement || { clientHeight: 0 };
    console.log(clickPercentage);
    window.scrollTo({ left: 0, top: document.documentElement.scrollHeight * clickPercentage, behavior: 'smooth' });
  }, []);

  const customerWindowHeight = window.screen.availHeight;
  const currentActiveIdx =
    toInteger(scrollTopPosition / (customerWindowHeight * 0.8)) < limpiHomeComponents.length
      ? toInteger(scrollTopPosition / (customerWindowHeight * 0.8))
      : limpiHomeComponents.length - 1;
  const renderedDots = limpiHomeComponents.map((_, idx) => (
    <div
      key={idx}
      className={classnames(styles.dot, idx === currentActiveIdx && styles.activeDot)}
      onClick={() => jumpTo(idx)}
    />
  ));

  return (
    <div className={styles.sideBarContainer}>
      <div style={{ backgroundSize: `100% ${percentage}%` }} className={styles.container} onClick={sideBarClick}></div>
    </div>
  );
};
