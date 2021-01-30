import React, { FC, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { limpiRouters } from '../../layouts/consts';
import { RouterType } from '../../layouts/types';
import styles from './styles.module.scss';
import classnames from 'classnames';

interface ILimpiDotsSideBar {
  showTitles?: boolean;
}

export const LimpiDotsSideBar: FC<ILimpiDotsSideBar> = ({ showTitles }) => {
  const location = useLocation();
  const isActive = useCallback((path) => path === location.pathname, [location.pathname]);

  const renderedDots = useMemo(
    () =>
      limpiRouters.map((router: RouterType) => (
        <Link key={router.name} to={router.path} className={styles.routerLine}>
          <div className={styles.dotContainer}>
            <div className={classnames(styles.dot, isActive(router.path) && styles.activeDot)} />
          </div>
          {showTitles && <span className={styles.titleText}> על ההתאחדות </span>}
        </Link>
      )),
    [isActive, showTitles],
  );

  return <div className={styles.sideBar}>{renderedDots}</div>;
};
