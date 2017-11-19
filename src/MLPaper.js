import React, { Component } from 'react';

import CS489_ML_Report from './docs/CS489_ML_Report.pdf';
import PDFViewer from './PDFViewer.js';

class MLPaper extends Component {
  render() {
    return (
      <PDFViewer title="Face Recognition Literature Survey" imagePath={CS489_ML_Report} />
    );
  }
}

export default MLPaper

