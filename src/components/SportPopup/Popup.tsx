import React, { FC } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

export interface IPopup {
  containerClassName?: string;
  backgroundColor?: string;
}

export const Popup: FC<IPopup> = ({ containerClassName, backgroundColor, children }) => {
  return (
    <div className={styles.shadow}>
      <div className={classnames(styles.main, containerClassName, backgroundColor && styles[backgroundColor])}>
        {children}
      </div>
    </div>
  );
};
