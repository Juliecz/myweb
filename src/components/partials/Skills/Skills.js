import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'react-bootstrap';
import './style.css';

const Skills = ({ skills }) => (
	<div className="skills">
		<Table className="skills-table">
			{ skills.map((skillType, i) => (
				<tbody key={`skills${i}`}>
				<tr key={`skillType${i}`}>
					<td colSpan={2}>
						<h3
							className="skills-table-title"
						>
							{skillType.name.toUpperCase()}
						</h3>
					</td>
				</tr>,
				{ skillType.types.map((type, i) => (
					<tr key={`skillTypes${i}`}>
						<td
							className="skills-table-left"
						>
							<h4>{type.name.toUpperCase()}</h4>
						</td>
						<td
							className="skills-table-right"
						>
							<h4>{type.text}</h4>
						</td>
					</tr>
				))}
				</tbody>
			)) }
		</Table>
	</div>
);

Skills.propTypes = {
	skills: PropTypes.array.isRequired
};

export default Skills;