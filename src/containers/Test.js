import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Test extends PureComponent {
	render() {
		return (<div>
			<h1>Test component</h1>
		</div>);
	}
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Test);