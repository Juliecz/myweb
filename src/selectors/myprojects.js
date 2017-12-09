import { createSelector } from 'reselect';
import myprojects from "../reducers/myprojects";

const getmyProjects = state => state.myprojects;

export const selectMyProjects = createSelector(
	[myprojects],
	(myprojects) =>
		myprojects || null
);

