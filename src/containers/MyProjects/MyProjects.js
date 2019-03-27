import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as selectorsMyProjects from '../../selectors/myprojects';
import Project from "../../components/partials/Project/Project";

import './style.css';

const sortByProjectOrder = (arr) =>
	arr.sort((a, b) =>
		(a.order > b.order)
			? 1 : (a.order === b.order)
			? 0 : -1
	);

class MyProjects extends PureComponent {
	render() {
		const { projects } = this.props.myprojects;
		
		return (
			<div className="myprojects">
				
				<div className="myprojects-left">
					<h3 className="myprojects-title">
						MY PROJECTS
					</h3>
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
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	myprojects: selectorsMyProjects.selectMyProjects(state)
});

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
