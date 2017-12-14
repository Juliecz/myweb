import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as selectorsRouting from '../../selectors/routing';
import * as selectorsApp from '../../selectors/app';

import Header from '../../components/partials/Header/Header';
import Footer from '../../components/partials/Footer/Footer';
import './style.css';

class App extends Component {
	render() {
		const { props } = this;
		
		return (
			<div className="app">
				<Header {...props} />
				<div className="content">
					{ props.children }
				</div>
				<Footer {...props}  />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	app: selectorsApp.selectApp(state),
	location: selectorsRouting.selectCurrentLocation(state)
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
