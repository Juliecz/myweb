import { createSelector } from 'reselect';

const getRouting = state => state.routing;
const getLocation = state =>
	getRouting(state) ? getRouting(state).locationBeforeTransitions : null;

export const selectCurrentLocation = createSelector(
	[getLocation],
	(location) => location
);