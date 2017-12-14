import React from 'react';

import * as images from './assets/index';
import Image from './Image';

import './style.css';

const MyProjects = ({ src, alt, url, name, description }) => (
	<div className="project">
		{url
			? <a href={url} target="_blank">
				<Image src={src} alt={alt} />
			</a>
			: <Image src={src} alt={alt} />
		}
		<h4>{name.toUpperCase()}</h4>
		<p>{description}</p>
	</div>
);

export default MyProjects;