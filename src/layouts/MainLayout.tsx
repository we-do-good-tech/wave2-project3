import React, { FC } from 'react';
import { limpiRouters } from './consts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouterType } from './types';
import { useDispatch } from 'react-redux';
import allActions from '../actions';

const { setNotLoading } = allActions.loadingActions;

export const MainLayout: FC = () => {
  const dispatch = useDispatch();

  const makeRouters = () =>
    limpiRouters.map((_: RouterType) => (
      <Route
        path={_.path === '/' ? process.env.PUBLIC_URL : _.path}
        exact={_.path === '/'}
        key={_.name}
        component={_.Component}></Route>
    ));

  window.onload = () => dispatch(setNotLoading());

  return (
    <Router>
      <Switch>{makeRouters()}</Switch>
    </Router>
  );
};
