import React, { FC } from 'react';
import { Icon, IconProps, IconType } from '../../../components/Icon';
import styles from './styles.module.scss';
import classnames from 'classnames';

interface ISportLogo {
  type: IconType;
  color: string;
  disabled?: boolean;
}

export const SportLogo: FC<ISportLogo> = ({ type, color, disabled }) => {
  return (
    <div className={classnames(styles.Icon, styles[color], disabled && styles.disabled)}>
      <Icon type={type} />
    </div>
  );
};
