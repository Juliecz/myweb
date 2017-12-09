import { createSelector } from 'reselect';

const getApp = state => state.app;

export const selectNavigation = createSelector(
	[getApp],
	(app) =>
		app ? app.navigation : null
);