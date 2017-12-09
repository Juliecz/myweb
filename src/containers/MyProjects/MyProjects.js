import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Projects from '../../components/MyProjects/MyProjects';

// import './style.css';

class MyProjects extends PureComponent {
	render() {
		return (
			<Projects />
		);
	}
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);