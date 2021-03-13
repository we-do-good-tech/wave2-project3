import React, { FC } from 'react';
import { limpiRouters } from './consts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouterType } from './types';

export const MainLayout: FC = () => {
  const makeRouters = () =>
    limpiRouters.map((_: RouterType) => (
      <Route
        path={_.path === '/' ? process.env.PUBLIC_URL : _.path}
        exact={_.path === '/'}
        key={_.name}
        component={_.Component}></Route>
    ));

  return (
    <Router>
      <Switch>{makeRouters()}</Switch>
    </Router>
  );
};
