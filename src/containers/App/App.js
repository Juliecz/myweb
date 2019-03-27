import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
	app: state.app,
	location: state.location
});

export default connect(mapStateToProps, null)(App);
