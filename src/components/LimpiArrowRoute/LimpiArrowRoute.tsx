import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { limpiRouters } from '../../layouts/consts';
import { RouterType } from '../../layouts/types';
import styles from './styles.module.scss';

export const LimpiArrowRoute: FC = () => {
  const location = useLocation();
  const pathNamesOnly: string[] = limpiRouters.map((router: RouterType) => router.path);
  const nextRoute = useMemo(() => pathNamesOnly[pathNamesOnly.indexOf(location.pathname) + 1], [
    pathNamesOnly,
    location,
  ]);

  console.log(nextRoute);

  return (
    <div className={styles.arrowContainer}>
      {nextRoute && (
        <Link to={nextRoute}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg' alt='down-arrow' />
        </Link>
      )}
    </div>
  );
};
