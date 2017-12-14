import { createSelector } from 'reselect';

const getApp = state => state.app;

export const selectApp = createSelector(
	[getApp],
	(app) =>
		app || null
);