import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './style.css';

class App extends Component {
	render() {
		const { children } = this.props;
		
		return (
			<div className="app">
				<Header />
				<div className="content">
					{ children }
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
