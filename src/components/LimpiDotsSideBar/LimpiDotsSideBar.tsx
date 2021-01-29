import React, { FC, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { limpiRouters } from '../../layouts/consts';
import { RouterType } from '../../layouts/types';
import styles from './styles.module.scss';
import classnames from 'classnames';



export const LimpiDotsSideBar: FC = () => {
  const location = useLocation();
  const isActive = useCallback((path)=> path === location.pathname ,[location.pathname]);
  
  const renderedDots = useMemo(()=>(
    limpiRouters.map((router:RouterType)=>(
      <Link key={router.name} to={router.path}>
          <div className={classnames(styles.dot, isActive(router.path) && styles.activeDot)}/>
      </Link>
    ))
  ),[isActive]);

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBar}>
      <Link key='home' to='/'>
          <div className={classnames(styles.dot, isActive('/') && styles.activeDot)}/>
      </Link>
      {renderedDots}
      </div>
    </div>
  );
}