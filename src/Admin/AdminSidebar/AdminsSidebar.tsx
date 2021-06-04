import classnames from 'classnames';
import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { IPath, pathes } from '../Admin';
import styles from './styles.module.scss';

interface IAdminSidebar {
  element?: JSX.Element;
}

export const AdminsSidebar: FC<IAdminSidebar> = ({ element }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const clickHandler = (path: string): void => {
    history.push(path);
  };
  return (
    <div className={styles.sidebar}>
      {element}
      {Object.values(pathes)
        .filter((path: IPath) => path.showInBar)
        .map((path: IPath, idx: number) => (
          <button
            key={`${idx}`}
            className={classnames(path.path === pathname && styles.active)}
            onClick={() => clickHandler(path.path)}>
            {path.icon ? <Icon type={path.icon} /> : <label />}
            {path.title}
          </button>
        ))}
    </div>
  );
};
