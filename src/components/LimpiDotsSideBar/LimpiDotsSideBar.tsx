import { useBoolean, useMount } from 'ahooks';
import classnames from 'classnames';
import React, { FC, useCallback, useMemo } from 'react';
import { useScrollPosition } from 'react-use-scroll-position';
import { limpiHomeComponents } from '../../pages/LimpiHome/consts';
import { LimpiHomePage } from '../../pages/LimpiHome/types';
import { jumpTo } from '../../utils/jumpTo';
import styles from './styles.module.scss';

export const LimpiDotsSideBar: FC = () => {
  const { y: scrollTopPosition } = useScrollPosition();
  const filteredHomeComponets = limpiHomeComponents.filter((_: LimpiHomePage) => !_.hideInBar);

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

  const isActive = useCallback(
    (idx: number) => {
      if (idx === currentActiveIdx) {
        return true;
      }
      if (currentActiveIdx === filteredHomeComponets.length) {
        return idx >= filteredHomeComponets.length - 1;
      }
      return false;
    },
    [currentActiveIdx, filteredHomeComponets.length],
  );

  const renderedDots = filteredHomeComponets.map((_, idx) => (
    <div
      key={`${idx}`}
      className={classnames(styles.dot, isActive(idx) && styles.activeDot)}
      onClick={() => jumpTo(idx)}
    />
  ));

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBar}>{renderedDots}</div>
    </div>
  );
};
