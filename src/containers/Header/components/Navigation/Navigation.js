import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

export default (props) => {
	const { navigation, location } = props;
	
	return (<div className="navigation">
		<Row className="navigation-grid">
			<Col
				xs={24}
				md={4}
				className="navigation-logo"
			>
				<div style={{
					fontSize: '35px',
					fontWeight: '600'
				}}>
					<Link to="/"> YULIYA</Link>
				</div>
			</Col>
			<Col
				xs={24}
				md={8}
				className="navigation-menu"
			>
				<ul className="navigation-menu-list">
					{ navigation.map((item) =>
						(<li key={`navigation_${item.route}`} className={item.route === location.pathname ? 'active' : ''}>
							<Link to={item.route}>{item.name}</Link>
						</li>)) }
				</ul>
			</Col>
		</Row>
	</div>);
};

// todo default props
// todo prop types