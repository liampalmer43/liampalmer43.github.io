import React, { Component } from 'react';

import Liam_Resume from './docs/Liam_Resume.pdf';
import PDFViewer from './PDFViewer.js';

class Resume extends Component {
  render() {
    return (
      <PDFViewer title="Resume" imagePath={Liam_Resume} />
    );
  }
}

export default Resume

