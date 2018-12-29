// @flow
import * as React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../config/history';
import Home from '../components/Home/container';

const Routes = (): React.Node => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default Routes;
