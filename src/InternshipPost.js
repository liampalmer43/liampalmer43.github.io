import React, { Component } from 'react';
import PropTypes from 'prop-types';

const STYLE = {
  backgroundColor: '#9c9fa3',
  width: 600,
  margin: 15,
  padding: '17px 10px 8px 10px',
  borderRadius: 7,
};

const IMAGE_STYLE = {
  width: 80,
  height: 80,
  borderRadius: 4,
};

const HEADING_TEXT_STYLE = {
  paddingLeft: 16,
  fontFamily: 'monospace',
  fontSize: 18,
};

const LIST_ELEMENT_STYLE = {
  paddingBottom: 9,
  fontFamily: 'Georgia, serif',
  fontSize: 16,
};

const LIST_STYLE = {
  paddingTop: 6,
};

class InternshipPost extends Component {
  render() {
    const { companyName, officeLocation, timeline, contributions, imagePath } = this.props;

    return (
      <div style={STYLE}>
        <div className="flexCenter">
          <img src={imagePath} alt={companyName} style={IMAGE_STYLE} />
          <div style={HEADING_TEXT_STYLE} className="flexSpaceAroundVertical">
            <div>{companyName}</div>
            <div>{officeLocation}</div>
            <div>{timeline}</div>
          </div>
        </div>
        <ul style={LIST_STYLE}>
          {contributions.map(contribution => <li key={contribution} style={LIST_ELEMENT_STYLE}>{contribution}</li>)}
        </ul>
      </div>
    );
  }
}

InternshipPost.propTypes = {
  companyName: PropTypes.string.isRequired,
  officeLocation: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string.isRequired
}

export default InternshipPost

