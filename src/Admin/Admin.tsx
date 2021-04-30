import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { ApplicationState } from '../saga';
import { Dashboard } from './Dashboard';
import { Login } from './Login';

export const Admin: FC = () => {
  const { isAuth } = useSelector((state: ApplicationState) => state.appState);
  const location = useLocation();

  if (!isAuth && location.pathname !== '/admin/login') {
    return <Redirect to='/admin/login' />;
  }

  return (
    <Switch>
      <Route exact path='/admin/login'>
        <Login />
      </Route>
      <Route exact path='/admin/dashboard'>
        <Dashboard />
      </Route>
      <Route>
        <Redirect to='/admin/dashboard' />
      </Route>
    </Switch>
  );
};
