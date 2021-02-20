import React, { FC } from 'react';
import { Icon, IconProps, IconType } from '../../../components/Icon';
import styles from './styles.module.scss';
import classnames from 'classnames';

interface ISportLogo {
  type: IconType;
  color: string;
  disabled?: boolean;
  onClick: () => void;
}

export const SportLogo: FC<ISportLogo> = ({ type, color, disabled, onClick }) => {
  return (
    <div
      onClick={() => !disabled && onClick?.()}
      className={classnames(styles.Icon, styles[color], disabled && styles.disabled)}>
      <Icon type={type} />
    </div>
  );
};
