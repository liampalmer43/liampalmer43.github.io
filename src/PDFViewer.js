import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ScrollToTopOnMount from './ScrollToTopOnMount';

const STYLE = {
  padding: 25
};

class PDFViewer extends Component {
  render() {
    const {title, imagePath} = this.props;

    return (
      <div className="flexCenter" style={STYLE}>
        <iframe title={title} src={imagePath} width="900" height="1140" type="application/pdf" />
        <ScrollToTopOnMount />
      </div>
    );
  }
}

PDFViewer.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired
}

export default PDFViewer

