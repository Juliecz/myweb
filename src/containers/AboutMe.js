import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as selectorsAboutMe from '../selectors/aboutme';

import About from '../components/common/AboutMe/AboutMe';

class AboutMe extends PureComponent {
	render() {
		return <About {...this.props.aboutme} />;
	}
}

const mapStateToProps = (state) => ({
	aboutme: selectorsAboutMe.selectAboutMe(state)
});

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);