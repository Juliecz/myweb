import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// import './style.css';

class Contact extends PureComponent {
	render() {
		return (<div className="myprojects">
			contact
		</div>);
	}
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Contact);