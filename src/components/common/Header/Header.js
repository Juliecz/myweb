import React, { PureComponent } from 'react';

import TopBar from '../../partials/TopBar/TopBar';
import Banner from '../../partials/Banner/Banner';
import './style.css';

class Header extends PureComponent {
	render() {
		return (<header className="header">
			<TopBar />
			<Banner />
		</header>);
	}
}

export default Header;