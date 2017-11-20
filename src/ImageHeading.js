import React, { Component } from 'react';
import PropTypes from 'prop-types';

const IMAGE_STYLE = {
  borderRadius: 4,
};

const IMAGE_CONTAINER_STYLE = {
  width: '45%',
}

const HEADING_TEXT_STYLE = {
  width: '55%',
  paddingLeft: 16,
};

class ImageHeading extends Component {
  render() {
    const { imagePath, imageWidth, imageHeight, textElements } = this.props;

    return (
      <div className="flex">
        <div style={IMAGE_CONTAINER_STYLE} className="flexReverse">
          <img src={imagePath} alt={imagePath} style={{...IMAGE_STYLE, width: imageWidth, height: imageHeight}} />
        </div>
        <div style={HEADING_TEXT_STYLE} className="flexSpaceAroundVertical headingText">
          {textElements.map(element => <div key={element}>{element}</div>)}
        </div>
      </div>
    );
  }
}

ImageHeading.propTypes = {
  imagePath: PropTypes.string.isRequired,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  textElements: PropTypes.arrayOf(PropTypes.string).isRequired
}

ImageHeading.defaultProps = {
  imageWidth: 80,
  imageHeight: 80
}

export default ImageHeading

