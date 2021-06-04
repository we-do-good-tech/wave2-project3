import React, { FC, useMemo } from 'react';
import { limpiRouters } from './consts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouterType } from './types';
import { useDispatch } from 'react-redux';
import { Loading } from '../components/Loading';
import { useSelector } from 'react-redux';
import { useMount } from 'ahooks';
import allActions from '../saga/saga';
import { ApplicationState } from '../saga';

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
        exact={_.path === '/' || _.exact}
        key={_.name}
        component={_.Component}></Route>
    ));

  const { isLoadingState, isRefreshing } = useSelector(
    ({ loadingState: { loading }, appState: { isLoading } }: ApplicationState) => ({
      isLoadingState: loading,
      isRefreshing: isLoading,
    }),
  );

  window.onload = () => dispatch(setNotLoading());
  window.onloadstart = () => dispatch(setLoading());

  const isLoading = useMemo(() => isLoadingState || isRefreshing, [isLoadingState, isRefreshing]);

  return (
    <Router>
      <Switch>{makeRouters()}</Switch>
      {isLoading && <Loading />}
    </Router>
  );
};
