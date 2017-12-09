import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as selectorsRouting from '../../selectors/routing';
import * as selectorsApp from '../../selectors/app';

// import TopBar from './components/TopBar/TopBar';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import './style.css';

class Header extends PureComponent {
	render() {
		const { navigation, location } = this.props;
		
		return (<header className="header">
			<Navigation
				navigation={navigation}
				location={location}
			/>
			{/*<Banner />*/}
		</header>);
	}
}

const mapStateToProps = (state) => ({
	navigation: selectorsApp.selectNavigation(state),
	location: selectorsRouting.selectCurrentLocation(state)
});

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Header);