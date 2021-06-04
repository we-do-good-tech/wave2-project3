import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { ApplicationState } from '../saga';
import { Content } from './Content';
import { Login } from './Login';
import styles from './styles.module.scss';
import allActions from '../saga/saga';
import logo from '../images/logoSmall.svg';
import { AdminsSidebar } from './AdminSidebar';
import { IconType } from '../components/Icon';
import classnames from 'classnames';
import { Users } from './Users';
import { useMount } from 'ahooks';

export interface IPath {
  path: string;
  title: string;
  showInBar: boolean;
  icon?: IconType;
}

export const pathes: Record<string, IPath> = {
  DASHBOARD: { path: '/admin/dashboard', showInBar: true, title: 'Dashboard', icon: 'dashboard' },
  CONTENT: { path: '/admin/content', showInBar: true, title: 'Content', icon: 'documents' },
  LOGIN: { path: '/admin/login', showInBar: false, title: 'Login' },
  USERS: { path: '/admin/users', showInBar: true, title: 'Users', icon: 'users' },
};
const { logoutUser } = allActions.appActions;
const { refreshUser } = allActions.appActions;

export const Admin: FC = () => {
  const { isAuth, isLoading, user, isAppLoading } = useSelector((state: ApplicationState) => ({
    isAuth: state.appState.isAuth,
    isLoading: state.appState.isLoading,
    user: state.appState.user,
    isAppLoading: state.loadingState.loading,
  }));
  const location = useLocation();
  const dispatch = useDispatch();

  useMount(() => {
    dispatch(refreshUser());
  });

  useEffect(() => {
    if (!!user?.expiresIn) {
      Number(new Date(user.expiresIn)) < Number(Date.now()) && dispatch(refreshUser());
    }
  }, [user?.expiresIn, dispatch]);

  if (!isAuth && !isLoading && !isAppLoading && location.pathname !== pathes.LOGIN.path) {
    return <Redirect to={pathes.LOGIN.path} />;
  }

  const logout = (): void => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.dashboardContainer}>
      {isAuth && (
        <AdminsSidebar
          element={
            isAuth && (
              <>
                <img src={logo} alt='limpi-logo' />
                <div className={styles.logoutContainer}>
                  <span>User: {user?.username}</span>
                  <button
                    className={classnames('admin-button admin-button__small margin-18', styles.logoutButton)}
                    onClick={() => logout()}>
                    Logout
                  </button>
                </div>
              </>
            )
          }></AdminsSidebar>
      )}
      <Switch>
        <Route exact path={pathes.LOGIN.path}>
          <Login />
        </Route>
        <Route exact path={pathes.DASHBOARD.path}>
          <Users />
        </Route>
        <Route path={pathes.USERS.path}>
          <Users />
        </Route>
        <Route exact path={pathes.CONTENT.path}>
          <Content />
        </Route>
        <Route>
          <Redirect to={pathes.CONTENT.path} />
        </Route>
      </Switch>
    </div>
  );
};
