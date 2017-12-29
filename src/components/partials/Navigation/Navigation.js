import React from 'react';
import { Link } from 'react-router';

import './style.css';

export default (props) => {
	const { navigation, location } = props;
	
	return (<div className="navigation">
		<div style={{
			fontSize: '55px',
			fontWeight: '600'
		}}>
			<p>
				<Link to="/"> Yuliya Ovchinnikova </Link>
			</p>
		</div>
		
	</div>);
};

// todo default props
// todo prop types