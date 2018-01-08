import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-icons/lib/fa';

import Tag from '../Tag/Tag';
import ProgressBar from '../ProgressBar/ProgressBar';
import ListStyle from '../../../assets/list-style.png';
import './style.css';

const Skills = ({ skills }) => {
	const { tech, lang } = skills;
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
							<h5 className="skills-block-title">
								<span>
									<img src={ListStyle} alt="Skills"/>
								</span>{skill.name}
							</h5>
							<div className="skills-block-texts">
								{skill.texts && skill.texts.map((text, _i) =>
									[
										<Tag
											key={`text_${_i}`}
											text={text}
										/>,
										_i !== skill.texts.length-1 &&
										<span
											key={`text_span_${_i}`}
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
					{lang.name.toUpperCase()}
				</h3>
				<div className="skills-lang-progress">
					{lang.types && lang.types.map((type, i) =>
						<ProgressBar {...type} />
					)}
				</div>
			</div>
		</div>
	);
};

Skills.propTypes = {
	skills: PropTypes.object.isRequired
};

export default Skills;