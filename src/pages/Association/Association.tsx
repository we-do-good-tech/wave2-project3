import React, { FC } from 'react';
import classnames from 'classnames';
import main from '../../images/association/main.png';
import styles from './styles.module.scss';

export const Association: FC = () => {
  return (
    <div className={classnames('section', styles.container)} style={{ backgroundImage: `url(${main})` }}>
      <div className={styles.paper}>
        <h1 className={styles.firstHeader}>ההתאחדות הישראלית לספורט נכים</h1>
        <p>
          מנהלת את כל פעילות הספורט התחרותית וההישגית , של ספורט הנכים בישראל. בנוסף, אמונה על איתור ,פיתוח וקידום
          ספורטאים צעירים עם מוגבלות מוטורית ליקויי ראייה ועיוורים.
        </p>
      </div>
      <div className={styles.paper}>
        <h1 className={styles.secondHeader}>הועד הפראלימפי הישראלי</h1>
        <p>
          אחראי להכנתן ושיגורן של משלחות ישראל למשחקים הפראלימפים. בנוסף, מפעיל את הקרן לקידום ספורט הנכים ומעניק מלגות
          הישג לספורטאי הסגל הבכיר.
        </p>
      </div>
    </div>
  );
};
