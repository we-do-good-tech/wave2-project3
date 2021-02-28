import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { ITips, ITipsCategory } from './consts';
import Caroline from '../../images/tips/Carolin.png';

export const Tips: FC = () => {
  const [tipbox, setTipBox] = useState<ITipsCategory>(ITips[0]);

  return (
    <div className={styles.container}>
      <div className={classnames(styles.Column1)}>
        {ITips.map((ITip: ITipsCategory) => (
          <div
            key={ITip.id}
            className={classnames(styles.cards)}
            style={{ border: '8px solid', borderColor: ITip.color }}
            onClick={() => setTipBox(ITip)}>
            <img loading='lazy' src={Caroline} />
          </div>
        ))}
      </div>

      <div className={classnames(styles.Column2)}>
        <div className={classnames(styles.tip)}>
          <h1 style={{ color: tipbox.color }}>הטיפ של</h1>
          <h2 style={{ color: tipbox.color }}>{tipbox.name}</h2>
          <blockquote>
            {tipbox.tip}
            <h3>
              {tipbox.name} {tipbox.lastName} | {tipbox.title} | {tipbox.gender} {tipbox.age}
            </h3>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
