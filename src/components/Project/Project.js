import React from 'react';

import './style.css';

const MyProjects = ({ src, alt }) => (
	<div className="project">
		<img src={`../../assets/${src}.png`} alt={alt}/>
	</div>
);

export default MyProjects;