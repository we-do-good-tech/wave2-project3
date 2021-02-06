import React, { FC } from 'react';
import { limpiRouters } from './consts';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { RouterType } from './types';
import { LimpiDotsSideBar } from '../components/LimpiDotsSideBar';
import { LimpiBurgerSideBar } from '../components/LimpiBurgerSideBar';
import { LimpiArrowRoute } from '../components/LimpiArrowRoute';

export const MainLayout: FC = () => {
  const makeRouters = () =>
    limpiRouters.map((component: RouterType) => (
      <Route
        path={component.path}
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
