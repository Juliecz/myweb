import React from 'react';
import Project from '../Project/Project';

import './style.css';

const MyProjects = () => (
	<div className="myprojects">
		<h2
			className="myprojects-title"
		>MY PROJECTS</h2>
		
		<div className="myprojects-items">
			<Project />
			<Project />
			<Project />
		</div>
	</div>
);

export default MyProjects;