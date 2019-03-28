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
	],
	projects: [
		{
			src: 'cookbook',
			alt: 'Cookbook',
			url: 'https://gamee-cookbook.herokuapp.com/',
			name: 'Cookbook',
			description: 'Online kuchařka. Používané technologie: React, Redux, Node.js, MongoDB',
			order: 1
		},
		{
			src: 'composer',
			alt: 'Composer',
			name: 'Holmes Place',
			description: 'Fox Media Czech Republic - Composer pro skládání stránek z jednotlivých komponent. Používané technologie: React, Redux, Node.js.',
			order: 3
		},
		{
			src: 'dsp',
			alt: 'DSP',
			name: 'Holmes Place',
			description: 'Fox Media Czech Republic - Digital sales process. Používané technologie: React, Redux, Node.js.',
			order: 4
		},
		{
			src: 'veganrestaurant',
			alt: 'Vegan restaurant',
			url: 'http://vegan-restaurant.herokuapp.com/',
			name: 'Vegan restaurant',
			description: 'Aplikace je realizovaná v jazyce Javascript na základě SPA architektury s použitím Javascriptového frameworku AngularJS. Na straně serveru byli používáné NodeJS a MongoDB databáze.',
			order: 2
		},
		{
			src: 'sudokugame',
			alt: 'Sudoku game',
			url: 'http://yuliya.cz/sudokugame/',
			name: 'Sudoku game',
			description: 'Logická hra, vytvořená pomocí programovacího jazyka Javascript a AngularJS.',
			order: 5
		},
		{
			src: 'crabgame',
			alt: 'Crab game',
			url: 'http://yuliya.cz/crabgame/',
			name: 'Crab game',
			description: 'Jednoduchá hra, která byla vytvořená za použití Javascriptové knihovny k vykreslování 2D grafiky PixiJS.',
			order: 6
		}
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return {...state};
	}
};
