import React from 'react';
import PropTypes from 'prop-types';

import Tag from '../Tag/Tag';
import './style.css';

const Skills = ({ skills }) => {
	const { tech } = skills;
	return (
		<div className="skills">
			<div className="skills-tech">
				<h3>TECHNICAL SKILLS</h3>
				<div className="skills-blocks">
					{ tech && tech.types && tech.types.map((skill, i) =>
						(skill.name.toLowerCase() === 'languages') ?
							(<div
								key={`skill_${i}`}
								className="skills-block"
							>
								klfslkdfs {skill.name}
							</div>)
							: (<div
								key={`skill_${i}`}
								className="skills-block"
							>
								<h4>
									<span> img </span>
									{skill.name}
								</h4>
								<div className="skills-block-texts">
									{skill.texts && skill.texts.map((text, _i) =>
										<Tag
											key={`text_${_i}`}
											text={text}
										/>
									)}
								</div>
							</div>)
					) }
				</div>
			</div>
			<div className="skills-lang">
				<h3> Languages </h3>
			
			</div>
		</div>
	);
};

Skills.propTypes = {
	skills: PropTypes.object.isRequired
};

export default Skills;