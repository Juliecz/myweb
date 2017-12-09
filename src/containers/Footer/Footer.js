import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './style.css';

class Footer extends PureComponent {
	render() {
		return (<div className="footer">
			Footer
		</div>);
	}
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Footer);