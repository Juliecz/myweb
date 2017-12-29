import React from 'react';
import Project from '../../partials/Project/Project';

import './style.css';

const sortByProjectOrder = (arr) =>
	arr.sort((a, b) =>
		(a.order > b.order)
			? 1 : (a.order === b.order)
			? 0 : -1
	);

const MyProjects = (props) => {
	const { projects } = props;
	return (
		<div className="myprojects">
			
			<div className="myprojects-left">
				<h2 className="myprojects-title">
					MY PROJECTS
				</h2>
				{projects &&
				sortByProjectOrder(
					projects.filter((project) => project.order%2===0)
				)
					.map((project) =>
						<Project
							key={`project_${project.order}`}
							{...project}
						/>)
				}
			</div>
			
			<div className="myprojects-right">
				{projects &&
				sortByProjectOrder(
					projects.filter((project) => project.order%2===1)
				)
					.map((project) =>
						<Project
							key={`project_${project.order}`}
							{...project}
						/>)
				}
				{projects && projects.map(() => {})}
			</div>
		</div>
	);
};

export default MyProjects;