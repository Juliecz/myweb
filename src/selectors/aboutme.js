import { createSelector } from 'reselect';

const getAboutMe = state => state.aboutme;

export const selectAboutMe = createSelector(
	[getAboutMe],
	(aboutme) =>
		aboutme || null
);