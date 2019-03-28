import React from 'react';
import PropTypes from 'prop-types';

// import './style.css';

const Tag = ({ text }) => (
	<span className="tag">{text}</span>
);

Tag.propTypes = {
	text: PropTypes.string.isRequired
};

export default Tag;
