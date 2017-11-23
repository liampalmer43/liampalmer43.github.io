import React, { Component } from 'react';
import PropTypes from 'prop-types';

const STYLE = {
  backgroundColor: '#9c9fa3',
  margin: 15,
  padding: '15px 30px',
  borderRadius: 7,
  fontFamily: 'monospace',
  fontSize: 18,
  lineHeight: '30px',
  textAlign: 'left',
};

const SPACE = 20;

const COURSE_STYLE = {
  width: 180,
  maxWidth: 180,
  paddingBottom: SPACE,
};

const DESCRIPTION_STYLE = {
  width: 580,
  maxWidth: 580,
  paddingBottom: SPACE,
};

const GRADE_STYLE = {
  paddingBottom: SPACE,
};

const HEADING_STYLE = {
  textAlign: 'center',
  paddingBottom: SPACE,
  fontSize: 22
};

const BREAK_STYLE = {
  paddingBottom: SPACE
};

const AVG_STYLE = {
  paddingTop: 25,
  fontWeight: 'bold',
};

class GradeTable extends Component {
  render() {
    const { heading, classes } = this.props;
    let sum = 0;
    let count = 0;
    classes.forEach(c => {
      sum += c.grade;
      count += 1;
    });

    return (
      <div style={STYLE}>
        <div style={HEADING_STYLE}>
          {heading}
        </div>
        <table>
          <thead>
            <tr>
              <th style={COURSE_STYLE}>{'Course'}</th>
              <th style={DESCRIPTION_STYLE}>{'Description'}</th>
              <th style={GRADE_STYLE}>{'Grade'}</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((g, index) =>
              <tr key={index}>
                <td style={g.end ? BREAK_STYLE : {}}>{g.course}</td>
                <td style={g.end ? BREAK_STYLE : {}}>{g.title}</td>
                <td style={g.end ? BREAK_STYLE : {}}>{g.grade}</td>
              </tr>)}
          </tbody>
        </table>
        <div className="flexReverse" style={AVG_STYLE}>{"Avg: " + (sum/count).toFixed(2)}</div>
      </div>
    );
  }
}

GradeTable.propTypes = {
  heading: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default GradeTable;

