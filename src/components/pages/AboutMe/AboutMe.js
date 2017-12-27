import React, { PureComponent } from 'react';
import Skills from '../../partials/Skills/Skills';

// import './style.css';

class AboutMe extends PureComponent {
	render() {
		const { skills } = this.props;
		
		return (<div className="aboutme">
			{ skills &&
			<Skills skills={skills} />
			}
		</div>);
	}
}

export default AboutMe;