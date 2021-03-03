import React, { FC } from 'react';
import { IPopup, Popup } from '.';
import styles from './styles.module.scss';
import classnames from 'classnames';

export const SportPopup: FC<IPopup> = ({ children, backgroundColor }) => {
  return (
    <Popup backgroundColor={backgroundColor} containerClassName={classnames(styles.sportPopup)}>
      {children}
    </Popup>
  );
};
