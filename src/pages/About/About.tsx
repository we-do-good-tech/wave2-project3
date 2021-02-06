import React, { FC } from 'react';
import { LimpiArrowRoute } from '../../components/LimpiArrowRoute';
import main from '../../images/about/main.png';
import styles from './styles.module.scss';

export const About: FC = () => {
  return (
    <div className={styles.container}>
      <h1>זה המקום בו תוכלו לחלום ולהבין שלפעמים דברים גדולים מתחילים בהחלטה קטנה וההחלטה הזו היא שלכם</h1>
      <img className={styles.mainImage} alt='logo' src={main} />
      <LimpiArrowRoute toPage={880} />
    </div>
  );
};
