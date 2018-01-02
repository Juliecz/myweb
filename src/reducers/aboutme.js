const initialState = {
	skills: {
		tech: {
			name: 'Technical skills',
			types: [
				{
					name: 'Frontend',
					texts: ['react', 'redux', 'angularJS', 'jQuery', 'pixiJS', 'HTML5', 'CSS3', 'bootstrap']
				},
				{
					name: 'Backend',
					texts: ['node.js', 'c#']
				},
				{
					name: 'Operating systems',
					texts: ['mac OS', 'linux', 'windows']
				},
				{
					name: 'Databases',
					texts: ['postgreSQL', 'mongoDB', 'MSSQL']
				},
				{
					name: 'DevOps',
					texts: ['git', 'heroku']
				},
				/*{
					name: 'Languages',
					texts: ['Czech: fluent (speaking, reading, writing)', 'Russian: native language', 'English: intermediate (reading tech documentation)']
				}*/
			]
		},
		lang: {
			name: 'Languages',
			types: [
				{
					name: 'Czech',
					texts: ['fluent (speaking, reading, writing)']
				},
				{
					name: 'Russian',
					texts: ['native language']
				},
				{
					name: 'English',
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