import React, { FC } from 'react';
import { Icon, IconType } from '../../../components/Icon';
import styles from './styles.module.scss';
import classnames from 'classnames';

interface ISportLogo {
  type: IconType;
  color: string;
  name: string;
  disabled?: boolean;
  onClick: () => void;
}

export const SportLogo: FC<ISportLogo> = ({ type, color, disabled, onClick, name }) => {
  return (
    <div className='text-align-center d-flex-center flex-column width-fit-content'>
      <div
        onClick={() => !disabled && onClick?.()}
        className={classnames(styles.Icon, styles[color], disabled && styles.disabled)}>
        <Icon type={type} />
      </div>
      <label className={styles[color]}>{name}</label>
    </div>
  );
};
