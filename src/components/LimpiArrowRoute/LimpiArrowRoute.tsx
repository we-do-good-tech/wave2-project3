import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface IArrowRoute {
  toPage: number;
}

export const LimpiArrowRoute: FC<IArrowRoute> = ({ toPage }) => {
  return (
    <div className={styles.arrowContainer}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'
        alt='down-arrow'
        onClick={() => window.scrollTo({ top: toPage, left: 0, behavior: 'smooth' })}
      />
    </div>
  );
};
