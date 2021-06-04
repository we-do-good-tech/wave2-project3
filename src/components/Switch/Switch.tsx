import React, { ChangeEvent, FC } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

export interface ISwitch {
  onChange: (e: boolean) => void;
  checked?: boolean;
}
export const Switch: FC<ISwitch> = ({ onChange, checked }) => {
  return (
    <label className={styles.switch}>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
      />
      <span className={classnames(styles.slider, styles.round)}></span>
    </label>
  );
};
