import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { TABS, TAB_TO_END_POINT } from './constants.js';

const NAV_STYLE = {
  backgroundColor: '#677284',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
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
    // Gets the current url location (thanks to the use of withRouter below)
    // substr(1) translates /path to path
    const currentLocation = this.props.location.pathname.substr(1);
    return (
      <div className="flexCenter" style={NAV_STYLE}>
        {TABS.map(tab =>
          <Link
            to={TAB_TO_END_POINT[tab]}
            key={tab}
            className="navBarElement"
            style={{...NAV_ELEMENT_STYLE, backgroundColor: currentLocation === TAB_TO_END_POINT[tab] ? '#0f449b' : '#142e59'}}>{tab}</Link>)}
      </div>
    );
  }
}

export default withRouter(NavBar);

