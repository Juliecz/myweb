import { createSelector } from 'reselect';

const getAboutMe = state => state.aboutme;

export const selectSkills = createSelector(
	[getAboutMe],
	(aboutme) =>
		aboutme ? aboutme.skills : null
);