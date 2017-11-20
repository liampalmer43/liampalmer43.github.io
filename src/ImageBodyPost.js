import React, { Component } from 'react';
import PropTypes from 'prop-types';

const STYLE = {
  backgroundColor: '#9c9fa3',
  width: 600,
  margin: 15,
  padding: '17px 10px 8px 10px',
  borderRadius: 7,
  fontFamily: 'monospace',
  fontSize: 18,
  lineHeight: '30px',
  textAlign: 'center',
};

const IMAGE_STYLE = {
  maxWidth: '95%',
  border: '1px solid #021a40',
  borderRadius: 10,
  margin: 5,
};

class ImageBodyPost extends Component {
  render() {
    const { headingElements, imagePaths } = this.props;

    return (
      <div style={STYLE}>
        {headingElements.map(heading => <div key={heading}>{heading}</div>)}
        {imagePaths.map(imagePath => <img src={imagePath} key={imagePath} alt={imagePath} style={IMAGE_STYLE} />)}
      </div>
    );
  }
}

ImageBodyPost.propTypes = {
  headingElements: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePaths: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ImageBodyPost

