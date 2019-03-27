import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Skills from "../components/Skills/Skills";

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

const mapStateToProps = (state) => ({
	skills: state.app.skills
});

export default connect(mapStateToProps, null)(AboutMe);
