// @flow
import { createSelector } from 'reselect';
import type { ReduxState } from '../../../config/staticTypes';

const page = (state: ReduxState): string => state.common.page;
const tab = (state: ReduxState): string => state.common.tab;

export const getCurrentPage = createSelector(
  [page],
  (currentPage: string): string => currentPage,
);

export const getCurrentTab = createSelector(
  [tab],
  (currentTab: string): string => currentTab,
);
