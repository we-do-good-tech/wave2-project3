import React, { FC, useMemo } from 'react';
import { limpiHomeComponents } from './consts';
import { LimpiDotsSideBar } from '../../components/LimpiDotsSideBar';
import logo from '../../images/logoSmall.png';
import classnames from 'classnames';
import { useScrollPosition } from 'react-use-scroll-position';

export const LimpiHome: FC = () => {
  const { y: scrollTopPosition } = useScrollPosition();

  const createPages = useMemo(() => {
    return limpiHomeComponents.map((page) => (
      <div id={page.name} className='section'>
        {page.component()}
      </div>
    ));
  }, []);

  return (
    <div style={{ direction: 'rtl' }}>
      <img src={logo} className={classnames('limpiLogo', scrollTopPosition >= 10 && 'limpiLogoRight')} />
      <LimpiDotsSideBar />
      {createPages}
    </div>
  );
};
