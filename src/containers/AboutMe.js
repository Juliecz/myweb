import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as selectorsAboutMe from '../selectors/aboutme';

import Skills from "../components/Skills/Skills";

class AboutMe extends PureComponent {
	render() {
		const { skills } = this.props.aboutme;
		
		return (<div className="aboutme">
			{ skills &&
			<Skills skills={skills} />
			}
		</div>);
	}
}

const mapStateToProps = (state) => ({
	aboutme: selectorsAboutMe.selectAboutMe(state)
});

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
