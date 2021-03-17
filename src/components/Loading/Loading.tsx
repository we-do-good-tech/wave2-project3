import React, { FC } from 'react';
import styles from './styles.module.scss';

export const Loading: FC = () => {
  return (
    <div className={styles.loading}>
      <label className={styles.loader} />
    </div>
  );
};
