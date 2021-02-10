import React, { FC, useMemo } from 'react';
import { limpiHomeComponents } from './consts';
import { LimpiDotsSideBar } from '../../components/LimpiDotsSideBar';
import logo from '../../images/logoSmall.png';
import classnames from 'classnames';
import { useScrollPosition } from 'react-use-scroll-position';
import { LimpiBurgerSideBar } from '../../components/LimpiBurgerSideBar';
import { SportsModify } from '../SportsModify';

export const LimpiHome: FC = () => {
  const { y: scrollTopPosition } = useScrollPosition();

  const createPages = () => {
    return limpiHomeComponents.map((page, idx) => (
      <div key={idx} id={page.name} className={classnames('section', idx === 0 && 'firstSection')}>
        <page.component />
      </div>
    ));
  };

  return (
    <div style={{ direction: 'rtl' }}>
      <img src={logo} alt='logo' className={classnames('limpiLogo', scrollTopPosition >= 10 && 'limpiLogoRight')} />
      <LimpiDotsSideBar />
      <LimpiBurgerSideBar />
      {createPages()}
    </div>
  );
};
