import React, { Component } from 'react';
import PropTypes from 'prop-types';

const IMAGE_STYLE = {
  borderRadius: 4,
};

const HEADING_TEXT_STYLE = {
  paddingTop: 13,
  lineHeight: '30px'
};

class ImageHeading extends Component {
  render() {
    const { imagePath, imageWidth, imageHeight, textElements } = this.props;

    return (
      <div className="flexAlignCenterVertical">
        <img src={imagePath} alt={imagePath} style={{...IMAGE_STYLE, width: imageWidth, height: imageHeight}} />
        <div style={HEADING_TEXT_STYLE} className="headingText centerText">
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

