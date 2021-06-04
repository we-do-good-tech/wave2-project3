import classnames from 'classnames';
import React, { FC } from 'react';
import { LimpiBurgerSideBar } from '../../components/LimpiBurgerSideBar';
import { LimpiDotsSideBar } from '../../components/LimpiDotsSideBar';
import { limpiHomeComponents } from './consts';

export const LimpiHome: FC = () => {
  const createPages = () => {
    return limpiHomeComponents.map((page, idx) => (
      <div key={`${idx}`} id={page.name} className={classnames('section', page.specialClassName)}>
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
