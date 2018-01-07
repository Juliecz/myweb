import React from 'react';

import * as images from '../../../assets/index';

const MyProjects = ({ src, alt }) => (
	<div className='project-image'>
		<img
			src={images[src]}
			alt={alt}
		/>
	</div>
);

export default MyProjects;