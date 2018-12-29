// @flow
import { createSelector } from 'reselect';
import type { ReduxState, Developer } from '../../../config/staticTypes';

const developers = (state: ReduxState): Array<Object> => {
  const developersList = state.developer.developers;
  return developersList;
};

export const pipTriggers = (state: ReduxState): Array<Object> => {
  const devList = state.developer.developers.filter(
    (developer: Developer): boolean => developer.state === 'pip triggered',
  );
  return devList;
};
export const actionPlanTriggers = (state: ReduxState): Array<Object> => {
  const devList = state.developer.developers.filter(
    (developer: Developer): boolean => developer.state === 'action plan triggered',
  );
  return devList;
};

export const getDevs = createSelector(
  [developers],
  (devs: Array<Object>): Array<Object> => devs,
);
