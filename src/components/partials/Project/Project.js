import React from 'react';

import * as images from './assets/index';

import './style.css';

const MyProjects = ({ src, alt, name, description }) => (
	<div className="project">
		<a href="">
			<img
				src={images[src]}
				alt={alt}
			/>
		</a>
		<h4>{name.toUpperCase()}</h4>
		<p>{description}</p>
	</div>
);

export default MyProjects;