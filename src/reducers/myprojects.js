const initialState = {
	projects: [
		{
			src: 'cookbook',
			alt: 'Image cookbook',
			url: 'https://gamee-cookbook.herokuapp.com/',
			name: 'Cookbook',
			description: 'Online kuchařka. Používané technologie: React, Redux, Node.js, MongoDB',
			order: 1
		},
		{
			src: 'composer',
			alt: 'Image composer',
			name: 'Holmes Place',
			description: 'Fox Media Czech Republic - Composer pro skládání stránek z jednotlivých komponent. Používané technologie: React, Redux, Node.js.',
			order: 3
		},
		{
			src: 'dsp',
			alt: 'Image DSP',
			name: 'Holmes Place',
			description: 'Fox Media Czech Republic - Digital sales process. Používané technologie: React, Redux, Node.js.',
			order: 4
		},
		{
			src: 'veganrestaurant',
			alt: 'Image vegan restaurant',
			url: 'http://vegan-restaurant.herokuapp.com/',
			name: 'Vegan restaurant',
			description: 'Aplikace je realizovaná v jazyce Javascript na základě SPA architektury s použitím Javascriptového frameworku AngularJS. Na straně serveru byli používáné NodeJS a MongoDB databáze.',
			order: 2
		},
		{
			src: 'sudokugame',
			alt: 'Image sudoku game',
			url: 'http://yuliya.cz/sudokugame/',
			name: 'Sudoku game',
			description: 'Logická hra, vytvořená pomocí programovacího jazyka Javascript a AngularJS.',
			order: 5
		},
		{
			src: 'crabgame',
			alt: 'Image crab game',
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