import React, { FC } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { OnePageRoute } from '../../components/OnePageRoute';

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
        <OnePageRoute idx={2}>
          <p className={styles.onePageRoute}>סיפורים של ספורטאים פראלימפיים</p>
        </OnePageRoute>
        <OnePageRoute idx={3}>
          <p className={styles.onePageRoute}>התאמת ענף ספורט</p>
        </OnePageRoute>
        <OnePageRoute idx={4}>
          <p className={styles.onePageRoute}>טיפים</p>
        </OnePageRoute>
      </div>
      <div className={classnames(styles.column)}>
        <h1>תודות</h1>
        <p>
          קרן איזקסון | מנהלת דיגיטלית בהתאחדות
          <br />
          צוות מוצר -
          <br />
          מוריה ברוס צור | מאפיינת ומעצבת
          <br />
          תומר קרויטורו | מפתח
          <br />
          שניר שושן | מפתח
        </p>
      </div>
      <p className={styles.redesigneBy}>Redesign & Developed by WeDoGood.Tech 2020</p>
    </div>
  );
};
