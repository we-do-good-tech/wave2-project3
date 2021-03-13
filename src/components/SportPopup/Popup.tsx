import React, { FC } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

export interface IPopup {
  containerClassName?: string;
  backgroundColor?: 'green' | 'blue' | 'turqiz' | 'orange';
  isFixed?: boolean;
}

export const Popup: FC<IPopup> = ({ containerClassName, backgroundColor, isFixed, children }) => {
  return (
    <div className={classnames(styles.shadow, isFixed && styles.isFixed)}>
      <div className={classnames(styles.main, containerClassName, backgroundColor && styles[backgroundColor])}>
        {children}
      </div>
    </div>
  );
};
