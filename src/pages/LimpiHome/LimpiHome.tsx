import classnames from 'classnames';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { LimpiBurgerSideBar } from '../../components/LimpiBurgerSideBar';
import { LimpiDotsSideBar } from '../../components/LimpiDotsSideBar';
import { Loading } from '../../components/Loading';
import { ApplicationState } from '../../saga';
import { limpiHomeComponents } from './consts';

export const LimpiHome: FC = () => {
  const createPages = () => {
    return limpiHomeComponents.map((page, idx) => (
      <div key={`${idx}`} id={page.name} className={classnames('section', page.specialClassName)}>
        <page.component />
      </div>
    ));
  };

  const { isLoading } = useSelector(({ contentState }: ApplicationState) => contentState);

  return (
    <div style={{ direction: 'rtl' }}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <LimpiDotsSideBar />
          <LimpiBurgerSideBar />
          {createPages()}
        </>
      )}
    </div>
  );
};
