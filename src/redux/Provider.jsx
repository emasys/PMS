// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';
import store from './store';

export default (): React.Node => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
