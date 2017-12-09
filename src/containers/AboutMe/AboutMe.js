import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as selectorsAboutMe from '../../selectors/aboutme';

import Skills from '../../components/Skills/Skills';

// import './style.css';

class AboutMe extends PureComponent {
	render() {
		const { skills } = this.props;
		return (<div className="aboutme">
			{ skills &&
				<Skills
					skills={skills}
				/>
			}
		</div>);
	}
}

const mapStateToProps = (state) => ({
	skills: selectorsAboutMe.selectSkills(state)
});

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);