import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import carolin from '../../images/tips/Carolin.png';
import classnames from 'classnames';
import { ITips, ITipsCategory } from './consts';

export const Tips: FC = () => {
  const [tipbox, setTipBox] = useState<ITipsCategory>(ITips[0]);
  console.log(tipbox);

  return (
    <div className={styles.container}>
      <div className={classnames(styles.Column1)}>
        {/* <div className={classnames(styles.cards)}> */}
        {/* <div className={classnames(styles.card1)}>
              <img alt='cardImage' src={carolin}/>
            </div>
            <div className={classnames(styles.card2)}>
              <img alt='cardImage' src={carolin} />
            </div>
            <div className={classnames(styles.card3)}>
              <img alt='cardImage' src={carolin} />
            </div>
          </div>
         <div className={classnames(styles.cards)} >
            <div className={classnames(styles.card4)}>
              <img alt='cardImage' src={carolin}/>
            </div>
            <div className={classnames(styles.card5)}>
              <img alt='cardImage' src={carolin} />
            </div>
            <div className={classnames(styles.card6)}>
              <img alt='cardImage' src={carolin} />
            </div>
        </div> */}
        {ITips.map((ITip: ITipsCategory) => (
          <div className={classnames(styles.card2)} onClick={() => setTipBox(ITip)}>
            <img alt='cardImage' src={ITip.image} />
          </div>
        ))}
      </div>

      <div className={classnames(styles.Column2)}>
        <div className={classnames(styles.tip)}>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id
            nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl
            mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae!
            <cite>Somebody famous</cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
