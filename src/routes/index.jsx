// @flow
import * as React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../config/history';
import Home from '../components/Home/container';
import Navbar from '../components/Navbar/container';
import UserMarkers from '../components/User/container';
import Map from '../components/Map/container';

const Routes = (): React.Node => (
  <Router history={history}>
    <React.Fragment>
      <Navbar />
      <Map />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/locations" component={UserMarkers} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default Routes;
