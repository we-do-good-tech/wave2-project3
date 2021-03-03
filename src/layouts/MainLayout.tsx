import React, { FC } from 'react';
import { limpiRouters } from './consts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouterType } from './types';

export const MainLayout: FC = () => {
  const makeRouters = () =>
    limpiRouters.map((component: RouterType) => (
      <Route
        path={component.path === '/' ? process.env.PUBLIC_URL : component.path}
        exact={component.path === '/'}
        key={component.name}
        component={component.Component}></Route>
    ));

  return (
    <Router>
      <Switch>{makeRouters()}</Switch>
    </Router>
  );
};
