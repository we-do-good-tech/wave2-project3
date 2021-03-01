import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { ISuccesses, ISuccessesCategory } from './consts';
import Caroline from '../../images/tips/Carolin.png';

export const Successes: FC = () => {
  const [successebox, setSuccesseBox] = useState<ISuccessesCategory>(ISuccesses[0]);

  return (
    <div className={styles.container}>
      <div className={classnames(styles.Column1)}>
        {ISuccesses.map((ISuccesse: ISuccessesCategory) => (
          <div
            key={ISuccesse.id}
            className={classnames(styles.cards)}
            style={{ border: '8px solid', borderColor: ISuccesse.color }}
            onClick={() => setSuccesseBox(ISuccesse)}>
            <div className={classnames(styles.card)} style={{ backgroundColor: ISuccesse.color }}>
              <img loading='lazy' src={Caroline} />
              <h1>ההצלחה של ישראלה ישראלי</h1>
              <h2>ישראלה היא ספורטאית פראלימפית שבשבילה השמיים הם לא הגבול!</h2>
              <button style={{ color: ISuccesse.color }}>כנסו לקרוא</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
