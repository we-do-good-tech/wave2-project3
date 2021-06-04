import React, { FC } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

interface IField {
  text?: string | JSX.Element;
  className?: string;
  onChange?: (val: string) => any;
  name?: string;
}

export const Field: FC<IField> = ({ text, className, onChange, name }) => {
  return (
    <div className={classnames(styles.fieldInput, className)}>
      {text}
      <input onChange={(e) => onChange?.(e.target.value)} />
    </div>
  );
};
