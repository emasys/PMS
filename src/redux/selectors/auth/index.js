// @flow
import { createSelector } from 'reselect';

const auth = (state: Object): Object => state.auth.userInfo;

// eslint-disable-next-line
export const isLoggedIn = createSelector([auth], (user: Object): Object => user);
