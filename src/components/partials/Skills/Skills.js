import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-icons/lib/fa';

import Tag from '../Tag/Tag';
import ListStyle from '../../../assets/list-style.png';
import './style.css';

const Skills = ({ skills }) => {
	const { tech } = skills;
	return (
		<div className="skills">
			<div className="skills-tech skills-common">
				<h3>
					<Icons.FaLaptop
						size={30}
						className="skills-icon"
					/>
					TECHNICAL SKILLS
				</h3>
				<ul className="skills-blocks">
					{ tech && tech.types && tech.types.map((skill, i) =>
						(<li
							key={`skill_${i}`}
							className="skills-block"
						>
							<h4 className="skills-block-title">
								<span>
									<img src={ListStyle} alt="List style"/>
								</span>{skill.name}
							</h4>
							<div className="skills-block-texts">
								{skill.texts && skill.texts.map((text, _i) =>
									[
										<Tag
											key={`text_${_i}`}
											text={text}
										/>,
										_i !== skill.texts.length-1 &&
										<span
											style={{
												color: '#e2e2e2'
											}}
										>/</span>
									]
								)}
							</div>
						</li>)
					) }
				</ul>
			</div>
			<div className="skills-lang skills-common">
				<h3>
					<Icons.FaComments
						size={30}
						className="skills-icon"
					/>
					LANGUAGES
				</h3>
			
			</div>
		</div>
	);
};

Skills.propTypes = {
	skills: PropTypes.object.isRequired
};

export default Skills;