const initialState = {
	skills: {
		tech: {
			name: 'Technical skills',
			types: [
				{
					name: 'Frontend',
					texts: ['React', 'Redux', 'AngularJS', 'jQuery', 'PixiJS', 'HTML5', 'CSS3', 'Bootstrap']
				},
				{
					name: 'Backend',
					texts: ['Node.js', 'C#']
				},
				{
					name: 'Operating systems',
					texts: ['Mac OS', 'Linux', 'Windows']
				},
				{
					name: 'Databases',
					texts: ['PostgreSQL', 'MongoDB', 'MSSQL', 'Sequelize']
				},
				{
					name: 'DevOps',
					texts: ['GIT', 'Heroku']
				}
			]
		},
		lang: {
			name: 'Languages',
			types: [
				{
					name: 'Czech',
					percent: 90,
					texts: ['fluent (speaking, reading, writing)']
				},
				{
					name: 'Russian',
					percent: 100,
					texts: ['native language']
				},
				{
					name: 'English',
					percent: 48,
					texts: ['intermediate (reading tech documentation)']
				}
			]
		}
	},
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
			projects: 'E.ON Solar',
			location: 'Prague, Czech Republic',
			from: '10/2017',
			to: 'present'
		},
		{
			company: 'Fox Media Czech Republic',
			title: 'JavaScript Developer',
			description: 'Node.js, React, Redux',
			projects: 'Holmes Place',
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