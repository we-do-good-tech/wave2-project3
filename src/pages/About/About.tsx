import React, { FC } from 'react';
import { LimpiArrowRoute } from '../../components/LimpiArrowRoute';
import main from '../../images/about/main.png';
import styles from './styles.module.scss';
import logo from '../../images/logoSmall.svg';
import { useScrollPosition } from 'react-use-scroll-position';
import classnames from 'classnames';

export const About: FC = () => {
  const { y: scrollTopPosition } = useScrollPosition();
  // const [isLoaded, { setTrue: setLoaded }] = useBoolean(false);

  return (
    <div className={styles.container}>
      <img
        src={logo}
        alt='logo'
        id='limpiLogo'
        className={classnames('limpiLogo', scrollTopPosition >= 40 && 'limpiLogoRight')}
      />
      <h1>זה המקום בו תוכלו לחלום ולהבין שלפעמים דברים גדולים מתחילים בהחלטה קטנה וההחלטה הזו היא שלכם</h1>
      <img loading='eager' className={styles.mainImage} alt='logo' src={main} />
      <LimpiArrowRoute toPage={880} />
    </div>
  );
};
