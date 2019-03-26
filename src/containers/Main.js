import React, { PureComponent } from 'react';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import MyWork from './MyWork/MyWork';

class Main extends PureComponent {
	render() {
		return (<div className="main">
			<AboutMe />
			<MyProjects />
			<MyWork />
		</div>);
	}
}

export default Main;
