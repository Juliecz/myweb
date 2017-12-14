import React, { PureComponent } from 'react';

import Navigation from './components/Navigation/Navigation';
import './style.css';

class Header extends PureComponent {
	render() {
		const { app, location } = this.props;
		const { navigation } = app;
		
		return (<header className="header">
			<Navigation
				navigation={navigation}
				location={location}
			/>
		</header>);
	}
}

export default Header;