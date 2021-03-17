import React, { FC } from 'react';
import { limpiHomeComponents } from './consts';
import { LimpiDotsSideBar } from '../../components/LimpiDotsSideBar';
import classnames from 'classnames';
import { LimpiBurgerSideBar } from '../../components/LimpiBurgerSideBar';
import { Loading } from '../../components/Loading';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../reducers';

export const LimpiHome: FC = () => {
  const createPages = () => {
    return limpiHomeComponents.map((page, idx) => (
      <div key={idx} id={page.name} className={classnames('section', page.specialClassName)}>
        <page.component />
      </div>
    ));
  };

  const { loading } = useSelector((state: ApplicationState) => state.loadingState);

  return (
    <div style={{ direction: 'rtl' }}>
      <LimpiDotsSideBar />
      <LimpiBurgerSideBar />
      {createPages()}t{loading && <Loading />}
    </div>
  );
};
