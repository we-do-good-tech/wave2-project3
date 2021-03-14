import React, { FC } from 'react';
import { limpiHomeComponents } from './consts';
import { LimpiDotsSideBar } from '../../components/LimpiDotsSideBar';
import classnames from 'classnames';
import { LimpiBurgerSideBar } from '../../components/LimpiBurgerSideBar';

export const LimpiHome: FC = () => {
  const createPages = () => {
    return limpiHomeComponents.map((page, idx) => (
      <div key={idx} id={page.name} className={classnames('section', page.specialClassName)}>
        <page.component />
      </div>
    ));
  };

  return (
    <div style={{ direction: 'rtl' }}>
      <LimpiDotsSideBar />
      <LimpiBurgerSideBar />
      {createPages()}
    </div>
  );
};
