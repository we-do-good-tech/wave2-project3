import { useBoolean, useDebounce } from 'ahooks';
import classnames from 'classnames';
import React, { FC, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import circlesImage from '../../images/circles.svg';
import closeImage from '../../images/close.svg';
import burgerImage from '../../images/menu.svg';
import { limpiHomeComponents } from '../../pages/LimpiHome/consts';
import { LimpiHomePage } from '../../pages/LimpiHome/types';
import { ApplicationState } from '../../saga';
import { jumpTo } from '../../utils/jumpTo';
import styles from './styles.module.scss';

export const LimpiBurgerSideBar: FC = () => {
  const [isSideBarShow, { setTrue: showSideBar, setFalse: hideSideBar }] = useBoolean(false);
  const [isGoingOut, { setTrue: turnOnGoingOut, setFalse: turnOffGoingOut }] = useBoolean(false);
  const { isMobile } = useSelector((state: ApplicationState) => state.appState);
  const goOutDebounce = useDebounce(isGoingOut, { wait: 1000 });
  const effectDelay = useMemo(() => (isMobile ? 0 : 600), [isMobile]);

  useEffect(() => {
    turnOffGoingOut();
  }, [goOutDebounce, turnOffGoingOut]);

  const handleSideBarExit = () => {
    turnOnGoingOut();
    setTimeout(() => hideSideBar(), effectDelay);
  };

  return (
    <div className={styles.burgerSideBarContainer}>
      {!isSideBarShow && (
        <img src={burgerImage} className={styles.openButton} alt='burger' onClick={() => showSideBar()} />
      )}
      {isSideBarShow && (
        <div className={classnames(styles.sideBarPanel, isGoingOut && styles.goingOut)}>
          <img src={closeImage} alt='close' className={styles.closeButton} onClick={handleSideBarExit} />
          <div className={styles.navLinks}>
            {limpiHomeComponents.map((limpiPage: LimpiHomePage, idx: number) => (
              <p onClick={() => jumpTo(idx)} key={`${idx}`}>
                {limpiPage.title}
              </p>
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
