import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App/App';
import Main from './containers/Main';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute components={Main}/>
				{/*<Route path="/test" components={Test}/>*/}
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
