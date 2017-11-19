import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { TABS, TAB_TO_END_POINT } from './constants.js';

class NavBar extends Component {
  render() {
    return (
      <div className="navBar flexCenter">
        {TABS.map(tab => <Link to={TAB_TO_END_POINT[tab]} key={tab} className="navBarElement">{tab}</Link>)}
      </div>
    );
  }
}

// NavBar.propTypes = {
//   selection: PropTypes.string.isRequired,
// }

export default NavBar

