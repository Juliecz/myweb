const initialState = {
	navigation: [
		{
			name: 'ABOUT ME',
			route: '/'
		},
		{
			name: 'MY PROJECTS',
			route: '/myprojects'
		},
		{
			name: 'CONTACT',
			route: '/contact'
		}
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return {...state};
	}
};