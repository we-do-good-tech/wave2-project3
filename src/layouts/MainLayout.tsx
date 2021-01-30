import React, { FC } from 'react';
import { limpiRouters } from './consts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RouterType } from './types';
import { LimpiHome } from '../components/LimpiHome/LimpiHome';
import { LimpiBurgerSideBar } from '../components/LimpiBurgerSideBar';

export const MainLayout: FC = () => {
  const makeRouters = () =>
    limpiRouters.map((component: RouterType) => (
      <Route
        path={component.path}
        exact={component.name === '/'}
        key={component.name}
        component={component.Component}
      />
    ));

  return (
    <Router>
      <LimpiBurgerSideBar />
      <Switch>
        <Route exact path='/' component={LimpiHome} />
        {makeRouters()}
      </Switch>
    </Router>
  );
};
