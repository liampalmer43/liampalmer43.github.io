import React, { Component } from 'react';

import ScrollToTopOnMount from './ScrollToTopOnMount';
import CS489_ML_Report from './docs/CS489_ML_Report.pdf';

const STYLE = {
  padding: 25
};

class MLPaper extends Component {
  render() {
    return (
      <div className="flexCenter" style={STYLE}>
        <iframe title="Face Recognition Literature Survey" src={CS489_ML_Report} width="900" height="1140" type="application/pdf" />
        <ScrollToTopOnMount />
      </div>
    );
  }
}

export default MLPaper

