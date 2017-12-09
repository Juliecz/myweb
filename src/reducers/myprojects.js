const initialState = {
	projects: [
		{
			src: 'cookbook',
			alt: 'Image cookbook'
		},
		{
			src: 'composer',
			alt: 'Image composer'
		},
		{
			src: 'dsp',
			alt: 'Image DSP'
		},
		{
			src: 'veganrestaurant',
			alt: 'Image vegan restaurant'
		},
		{
			src: 'sudokugame',
			alt: 'Image sudoku game'
		},
		{
			src: 'crabgame',
			alt: 'Image crab game'
		}
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return {...state};
	}
};