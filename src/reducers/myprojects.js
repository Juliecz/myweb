const initialState = {
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