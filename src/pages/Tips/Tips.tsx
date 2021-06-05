import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { ITipsCategory } from './consts';
import Caroline from '../../images/tips/Carolin.png';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../saga';

export enum GenderEnum {
  male = 'בן',
  female = 'בת',
}

export const Tips: FC = () => {
  const tips = useSelector(({ contentState }: ApplicationState) => contentState.tip ?? []);
  const [tipbox, setTipBox] = useState<ITipsCategory>(tips[0]);

  return (
    <div className={styles.container}>
      <div className={classnames(styles.right)}>
        <div className={styles.squaresContaienr}>
          {tips.map((_: ITipsCategory) => (
            <img
              src={Caroline}
              key={_?.id}
              className={classnames(styles[_?.className], tipbox?.id === _.id && styles?.active)}
              onClick={() => setTipBox(_)}
              alt={_.name}
            />
          ))}
        </div>
      </div>

      <div className={classnames(styles.left)}>
        <div className={classnames(styles.tip, styles[`color-${tipbox?.className}`])}>
          <h1>הטיפ של</h1>
          <h2>{tipbox?.name}</h2>
          <p>
            {tipbox?.tip}
            <span>
              {tipbox?.name} {tipbox?.lastName} | {tipbox?.title} | {GenderEnum[tipbox?.gender]} {tipbox?.age}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
