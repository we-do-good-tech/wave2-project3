import { useMount, useUnmount } from 'ahooks';
import React, { FC } from 'react';
import { lockScreen, unlockScreen } from '../../utils/lockScreen';
import styles from './styles.module.scss';

export const Loading: FC = () => {
  useMount(() => lockScreen());
  useUnmount(() => unlockScreen());

  return (
    <div className={styles.loading}>
      <label className={styles.loader} />
    </div>
  );
};
