import React, { FC, useMemo } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { limpiHomeComponents } from '../../pages/LimpiHome/consts';
import { useScrollPosition } from 'react-use-scroll-position';
import { jumpTo } from '../../utils/jumpTo';
import { LimpiHomePage } from '../../pages/LimpiHome/types';
import { useBoolean, useMount } from 'ahooks';

export const LimpiDotsSideBar: FC = () => {
  const { y: scrollTopPosition } = useScrollPosition();

  const [wasMount, { setTrue: setMounted }] = useBoolean(false);
  useMount(() => setMounted());

  const steps: number[] = useMemo(() => {
    if (wasMount) {
      let counter: number = 0;
      return limpiHomeComponents.map((_: LimpiHomePage) => {
        const el = window.document.getElementById(_.name);
        const height = el?.getBoundingClientRect().height ?? 0;
        counter += height;
        return counter;
      });
    }
    return [];
  }, [wasMount]);

  const currentActiveIdx = useMemo(() => {
    let current = 0;
    limpiHomeComponents.forEach((_: LimpiHomePage, idx: number) => {
      if (scrollTopPosition + 300 > steps[idx]) current = idx + 1;
    });
    return current;
  }, [steps, scrollTopPosition]);

  const renderedDots = limpiHomeComponents
    .filter((_: LimpiHomePage) => !_.hideInBar)
    .map((_, idx) => (
      <div
        key={idx}
        className={classnames(styles.dot, idx === currentActiveIdx && styles.activeDot)}
        onClick={() => jumpTo(idx)}
      />
    ));

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBar}>{renderedDots}</div>
    </div>
  );
};
