import React, { Component } from 'react';

import Liam_Transcript from './docs/Liam_Transcript.pdf';
import PDFViewer from './PDFViewer.js';

class Transcript extends Component {
  render() {
    return (
      <PDFViewer title="Transcript" imagePath={Liam_Transcript} />
    );
  }
}

export default Transcript

