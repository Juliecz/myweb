import React from 'react';
import Image from './Image';

import './style.css';

const MyProjects = ({ src, alt, url, name, description }) => {
	if (url) return (
		<a href={url} target="_blank" className="project-link">
			<div className="project">
				<Image src={src} alt={alt} />
				<h4 className="project-title">{name.toUpperCase()}</h4>
				<div className="project-line" />
				<p>{description}</p>
			</div>
		</a>
	);
	else return (
		<div className="project">
			<Image src={src} alt={alt} />
			<h4 className="project-title">{name.toUpperCase()}</h4>
			<div className="project-line" />
			<p>{description}</p>
		</div>
	);
};

export default MyProjects;