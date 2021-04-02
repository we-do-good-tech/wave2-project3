import React, { FC } from 'react';
import { IPopup, Popup } from '.';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { useMount, useUnmount } from 'ahooks';
import { lockScreen, unlockScreen } from '../../utils/lockScreen';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../reducers';

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
