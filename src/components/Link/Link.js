import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Link extends PureComponent {
  render() {
    const { url, text } = this.props;

    if (!url || !text) {
      return null;
    }

    return (
      <a href={url} target="_blank">
        <span className="link">{text}</span>
      </a>
    )
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
