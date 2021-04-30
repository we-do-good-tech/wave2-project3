import { useMount, useUnmount } from 'ahooks';
import classnames from 'classnames';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IPopup, Popup } from '.';
import { ApplicationState } from '../../saga';
import { lockScreen, unlockScreen } from '../../utils/lockScreen';
import styles from './styles.module.scss';

export const SportPopup: FC<IPopup> = ({ children, backgroundColor }) => {
  const { isMobile } = useSelector((state: ApplicationState) => state.appState);

  useMount(() => isMobile && lockScreen());
  useUnmount(() => unlockScreen());

  return (
    <Popup backgroundColor={backgroundColor} containerClassName={classnames(styles.sportPopup)}>
      {children}
    </Popup>
  );
};
