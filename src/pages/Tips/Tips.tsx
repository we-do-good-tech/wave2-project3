import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { tips, ITipsCategory } from './consts';
import Caroline from '../../images/tips/Carolin.png';

export const Tips: FC = () => {
  const [tipbox, setTipBox] = useState<ITipsCategory>(tips[0]);
  return (
    <div className={styles.container}>
      <div className={classnames(styles.right)}>
        <div className={styles.squaresContaienr}>
          {tips.map((tip: ITipsCategory) => (
            <img
              src={Caroline}
              key={tip.id}
              className={classnames(styles[tip.className], tipbox.id === tip.id && styles.active)}
              onClick={() => setTipBox(tip)}
              alt={tip.name}
            />
          ))}
        </div>
      </div>

      <div className={classnames(styles.left)}>
        <div className={classnames(styles.tip)}>
          <h1 style={{ color: tipbox.color }}>הטיפ של</h1>
          <h2 style={{ color: tipbox.color }}>{tipbox.name}</h2>
          <p>
            {tipbox.tip}
            <span>
              {tipbox.name} {tipbox.lastName} | {tipbox.title} | {tipbox.gender} {tipbox.age}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
