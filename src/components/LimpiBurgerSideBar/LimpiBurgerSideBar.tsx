import React, { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { useBoolean, useDebounce } from 'ahooks';
import burgerImage from '../../images/menu.svg';
import closeImage from '../../images/close.svg';
import circlesImage from '../../images/circles.svg';
import classnames from 'classnames';
import { limpiHomeComponents } from '../../pages/LimpiHome/consts';
import { LimpiHomePage } from '../../pages/LimpiHome/types';
import { jumpTo } from '../../utils/jumpTo';

export const LimpiBurgerSideBar: FC = () => {
  const [isSideBarShow, { setTrue: showSideBar, setFalse: hideSideBar }] = useBoolean(false);
  const [isGoingOut, { setTrue: turnOnGoingOut, setFalse: turnOffGoingOut }] = useBoolean(false);

  const goOutDebounce = useDebounce(isGoingOut, { wait: 1000 });

  useEffect(() => {
    turnOffGoingOut();
  }, [goOutDebounce, turnOffGoingOut]);

  const handleSideBarExit = () => {
    turnOnGoingOut();
    setTimeout(() => hideSideBar(), 900);
  };

  return (
    <div className={styles.burgerSideBarContainer}>
      {!isSideBarShow && (
        <img src={burgerImage} className={styles.openButton} alt='burger' onClick={() => showSideBar()} />
      )}
      {isSideBarShow && (
        <div className={classnames(styles.sideBarPanel, isGoingOut && styles.goingOut)}>
          <img src={closeImage} alt='burger' className={styles.closeButton} onClick={handleSideBarExit} />
          <div className={styles.navLinks}>
            {limpiHomeComponents.map((limpiPage: LimpiHomePage, idx: number) => (
              <p onClick={() => jumpTo(idx)}>{limpiPage.title}</p>
            ))}
          </div>
          <div className={styles.circlesImageContainer}>
            <img src={circlesImage} alt='circles' />
          </div>
        </div>
      )}
    </div>
  );
};
