import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Landing extends PureComponent {
	render() {
		return (<div className="landing">
		
		</div>);
	}
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Landing);