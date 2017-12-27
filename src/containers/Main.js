import React, { PureComponent } from 'react';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';

class Main extends PureComponent {
	render() {
		return (<div className="main">
			<AboutMe />
			<MyProjects />
		</div>);
	}
}

export default Main;