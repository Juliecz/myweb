import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import aboutme from './aboutme';
import myprojects from './myprojects';

export default combineReducers({
	app,
	aboutme,
	myprojects,
	routing: routerReducer
})