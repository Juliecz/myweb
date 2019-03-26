import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Project extends Component {
  render() {
    const { header, text, image } = this.props;
    
    return (
      <div className="block-project">
        <img src={image} alt={header} />
        <h5>{header}</h5>
        <p>{text}</p>
      </div>
    )
  }
}

Project.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;
