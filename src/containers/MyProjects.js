import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as selectorsMyProjects from '../selectors/myprojects';

import Projects from '../components/pages/MyProjects/MyProjects';

class MyProjects extends PureComponent {
	render() {
		return (
			<Projects {...this.props.myprojects} />
		);
	}
}

const mapStateToProps = (state) => ({
	myprojects: selectorsMyProjects.selectMyProjects(state)
});

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);