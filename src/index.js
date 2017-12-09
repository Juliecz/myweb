import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

import store from './store';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App/App';
import Test from './containers/Test/Test';
import MyProjects from './containers/MyProjects/MyProjects';
import AboutMe from './containers/AboutMe/AboutMe';
import Contact from './containers/Contact/Contact';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute components={AboutMe}/>
				<Route path="/myprojects" components={MyProjects}/>
				<Route path="/contact" components={Contact}/>
				<Route path="/test" components={Test}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
