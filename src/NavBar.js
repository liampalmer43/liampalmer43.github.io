import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { TABS, TAB_TO_END_POINT } from './constants.js';

const NAV_STYLE = {
  backgroundColor: '#677284',
};

const NAV_ELEMENT_STYLE = {
  fontFamily: 'monospace',
  fontSize: 20,
  color: '#a2b5d3',
  padding: 10,
  margin: 10,
  backgroundColor: '#142e59',
  borderRadius: 10,
  textDecoration: 'none',
};

class NavBar extends Component {
  render() {
    return (
      <div className="flexCenter" style={NAV_STYLE}>
        {TABS.map(tab => <Link to={TAB_TO_END_POINT[tab]} key={tab} className="navBarElement" style={NAV_ELEMENT_STYLE}>{tab}</Link>)}
      </div>
    );
  }
}

// NavBar.propTypes = {
//   selection: PropTypes.string.isRequired,
// }

export default NavBar

