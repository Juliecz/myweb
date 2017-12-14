import { createSelector } from 'reselect';

const getMyProjects = state => state.myprojects;

export const selectMyProjects = createSelector(
	[getMyProjects],
	(myprojects) =>
		myprojects || null
);

