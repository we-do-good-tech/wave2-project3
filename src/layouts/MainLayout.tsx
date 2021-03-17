import React, { FC } from 'react';
import { limpiRouters } from './consts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouterType } from './types';
import { useDispatch } from 'react-redux';
import allActions from '../actions';
import { Loading } from '../components/Loading';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../reducers';

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
  const { loading } = useSelector((state: ApplicationState) => state.loadingState);
  document.onload = () => dispatch(setNotLoading());

  return (
    <Router>
      <Switch>{makeRouters()}</Switch>
      {loading && <Loading />}
    </Router>
  );
};
