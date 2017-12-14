import React from 'react';
import Project from '../../partials/Project/Project';

import './style.css';

const MyProjects = (props) => {
	const { projects } = props;
	return (
		<div className="myprojects">
			<h2
				className="myprojects-title"
			>MY PROJECTS</h2>
			
			<div className="myprojects-items">
				{ projects && projects.map((project, i) =>
					(<Project
						key={`project_${i}`}
						{...project}
					/>)
				)}
			</div>
		</div>
	);
};

export default MyProjects;