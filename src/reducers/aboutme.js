const initialState = {
	skills: [
		{
			name: 'Technical skills',
			types: [
				{
					name: 'Backend',
					text: 'Node.js, C#'
				},
				{
					name: 'Frontend',
					text: 'React, Redux, AngularJS, jQuery, PixiJS, HTML5, CSS3, Bootstrap'
				},
				{
					name: 'Operating systems',
					text: 'Linux, MS Windows, Mac OS'
				},
				{
					name: 'Databases',
					text: 'PostgreSQL, MongoDB, MSSQL'
				},
				{
					name: 'DevOps',
					text: 'GIT, Heroku'
				}
			]
		},
		{
			name: 'Languages',
			types: [
				{
					name: 'Czech',
					text: 'fluently'
				},
				{
					name: 'Russian',
					text: 'native speaker'
				},
				{
					name: 'English',
					text: 'intermediate'
				}
			]
		}
	],
	education: [
		{
			school: 'Vysoká škola finanční a správní - Praha',
			degree: 'Bachelor\'s degree',
			fieldOfStudy: 'Applied Informatics',
			from: '2012',
			to: '2016'
		}
	],
	experience: [
		{
			company: 'Creative Dock',
			title: 'JavaScript Developer',
			description: 'JavaScript, React, Redux, AngularJS, Node.js',
			location: 'Prague, Czech Republic',
			from: '10/2017',
			to: 'present'
		},
		{
			company: 'Fox Media Czech Republic',
			title: 'JavaScript Developer',
			description: 'Node.js, React, Redux',
			location: 'Prague, Czech Republic',
			from: '12/2016',
			to: '09/2017'
		}
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return {...state};
	}
};