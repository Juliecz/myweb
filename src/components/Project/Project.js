import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Project extends Component {
  render() {
    const { header, year, text, image } = this.props;
    
    return (
      <div className="block-project">
        <img src={image} alt={header} />

        <div className="block-project-header">
          <h5>
            {header}
          </h5>
          {year && <span>{year}</span>}
        </div>

        <p className="block-project-text">
          {text}
        </p>
      </div>
    )
  }
}

Project.propTypes = {
  header: PropTypes.string.isRequired,
  year: PropTypes.string,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;
