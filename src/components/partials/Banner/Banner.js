import React from 'react';
import { Link } from 'react-router';

import me from '../../../assets/me.jpg';

import './style.css';

export default () =>
	(<div className="banner">
		<div className="banner-title">
			<p className="banner-title-big">
				<Link to="/"> Yuliya Ovchinnikova </Link>
			</p>
			<hr/>
			<p className="banner-title-small">
				Full-Stack JavaScript Developer
			</p>
		</div>
		<div className="banner-photo">
			<img
				src={me}
				align="left"
				alt="Yuliya Ovchinnikova"
			/>
		</div>
	</div>);