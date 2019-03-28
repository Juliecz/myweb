import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Link from '../../components/Link/Link';

import './style.css';

class Project extends PureComponent {
  render() {
    const { header, year, text, image, links } = this.props;
    
    return (
      <div className="block-project">
        <img src={image} alt={header} />
        
        <div className="block-project-header">
          <h5>
            {header}
          </h5>
          {year && <span>{year}</span>}
        </div>

        <div className="block-project-links">
          {links && links.map((link, i) => (
            <Link
              key={`projectlink${i}`}
              url={link.url}
              text={link.text}
            />
          ))}
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
  links: PropTypes.array,
};

export default Project;
