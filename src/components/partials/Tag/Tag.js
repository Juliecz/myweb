import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Skills = ({ text }) => (
	<span className="tag">{text}</span>
);

Skills.propTypes = {
	text: PropTypes.string.isRequired
};

export default Skills;