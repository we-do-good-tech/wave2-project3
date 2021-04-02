import React, { FC } from 'react';
import { limpiRouters } from './consts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouterType } from './types';
import { useDispatch } from 'react-redux';
import allActions from '../actions';
import { Loading } from '../components/Loading';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../reducers';
import { useMount } from 'ahooks';

const { setNotLoading, setLoading } = allActions.loadingActions;
const { setIsMobile, setIsTablet } = allActions.appActions;

function detectMob() {
  const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

function detectTablet() {
  const toMatch = [/webOS/i, /iPad/i];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
export const MainLayout: FC = () => {
  const dispatch = useDispatch();
  useMount(() => {
    dispatch(setIsMobile(detectMob()));
    dispatch(setIsTablet(detectTablet()));
  });

  const makeRouters = () =>
    limpiRouters.map((_: RouterType) => (
      <Route
        path={_.path === '/' ? process.env.PUBLIC_URL : _.path}
        exact={_.path === '/'}
        key={_.name}
        component={_.Component}></Route>
    ));
  const { loading } = useSelector((state: ApplicationState) => state.loadingState);
  window.onload = () => dispatch(setNotLoading());
  window.onloadstart = () => dispatch(setLoading());

  return (
    <Router>
      <Switch>{makeRouters()}</Switch>
      {loading && <Loading />}
    </Router>
  );
};
