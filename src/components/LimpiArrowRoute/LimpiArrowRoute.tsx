import React, { FC } from 'react';
import { jumpTo } from '../../utils/jumpTo';
import styles from './styles.module.scss';

export const LimpiArrowRoute: FC = () => {
  return (
    <div className={styles.arrowContainer}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg'
        alt='down-arrow'
        onClick={() => jumpTo(1)}
      />
    </div>
  );
};
