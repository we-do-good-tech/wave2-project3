import React, { FC, memo } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';

export const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={classnames(styles.column)}>
        <h1>
          סביבת מוטיבציה לילדים בעלי מוגבלויות
          <br />
          להשתתפתות בספורט
        </h1>
        <p>
          בשיתוף ההתאחדות הישראלית לספורט נכים
          <br />
          והועד הפראלימפי הישראלי
          <br />
          office@isad.org.il
          <br />
          03-6493132
        </p>
      </div>
      <div className={classnames(styles.column)}>
        <h1>תכנים מעוררים השראה</h1>
        <p>
          סיפורים של ספורטאים פראלימפיים
          <br />
          התאמת ענף ספורט
          <br />
          טיפים
        </p>
      </div>
      <div className={classnames(styles.column)}>
        <h1>תודות</h1>
        <p>
          קרן איזקסון | מנהלת דיגטלית בהתאחדות
          <br />
          צוות מוצר -
          <br />
          שם מלא | תפקיד
        </p>
      </div>
      <p className={styles.redesigneBy}>Redesign & Developed by WeDoGood.Tech 2020</p>
    </div>
  );
};
