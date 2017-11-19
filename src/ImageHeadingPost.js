import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageHeading from './ImageHeading.js';

const STYLE = {
  backgroundColor: '#9c9fa3',
  width: 600,
  margin: 15,
  padding: '17px 10px 8px 10px',
  borderRadius: 7,
};

const LIST_ELEMENT_STYLE = {
  paddingBottom: 9,
  fontFamily: 'Georgia, serif',
  fontSize: 16,
};

const LIST_STYLE = {
  paddingTop: 6,
};

class ImageHeadingPost extends Component {
  render() {
    const { textElements, contributions, imagePath } = this.props;

    return (
      <div style={STYLE}>
        <ImageHeading
          imagePath={imagePath}
          textElements={textElements} />
        <ul style={LIST_STYLE}>
          {contributions.map(contribution => <li key={contribution} style={LIST_ELEMENT_STYLE}>{contribution}</li>)}
        </ul>
      </div>
    );
  }
}

ImageHeadingPost.propTypes = {
  textElements: PropTypes.arrayOf(PropTypes.string).isRequired,
  contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string.isRequired,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number
}

ImageHeadingPost.defaultProps = {
  imageWidth: 80,
  imageHeight: 80
}

export default ImageHeadingPost

