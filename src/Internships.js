import React, { Component } from 'react';

import facebook_logo from './docs/facebook_logo.png';
import uber_logo from './docs/uber_logo.png';
import adroll_logo from './docs/adroll_logo.jpg';
import oracle_logo from './docs/oracle_logo.png';
import sidefx_logo from './docs/sidefx_logo.png';

import ScrollToTopOnMount from './ScrollToTopOnMount';
import ImageHeadingPost from './ImageHeadingPost.js';

const INTERNSHIPS = [
  {
    companyName: 'Facebook',
    officeLocation: 'Seattle, WA',
    timeline: 'Fall 2017',
    contributions: [
      'Implemented a load-testing framework for the Tupperware Scheduler, a distributed system used for deploying services at Facebook.',
      'Defined Tupperware Scheduler scalability metrics.',
      'Used C++, python, and bash.'
    ],
    imagePath: facebook_logo
  },
  {
    companyName: 'Uber',
    officeLocation: 'San Francisco, CA',
    timeline: 'Summer 2017',
    contributions: [
      'Designed and implemented front-end and back-end components for Metron, Uber’s platform for storing and sharing metric definitions.',
      'Made greater than 15000 lines of contribution that helped moved Metron to product launch and over 150 weekly users within Uber.',
      'Used React Redux, CSS, and Java.',
      'Received highest internship review (outstanding) and full-time offer.'
    ],
    imagePath: uber_logo
  },
  {
    companyName: 'AdRoll',
    officeLocation: 'San Francisco, CA',
    timeline: 'Summer 2016',
    contributions: [
      'Implemented Impression Segments, a feature that enables customers to target buyers based on the number of previously shown advertisements.',
      'Used Apache Storm, AWS DynamoDB, and BackboneJS.'
    ],
    imagePath: adroll_logo
  },
  {
    companyName: 'Oracle',
    officeLocation: 'Toronto, Canada',
    timeline: 'Fall 2015',
    contributions: [
      'Designed and implemented an interactive web tool used by external developers to learn Oracle Eloqua’s marketing API.',
      'Utilized ReactJS, Flux, and CSS'
    ],
    imagePath: oracle_logo
  },
  {
    companyName: 'SideFX Software Inc',
    officeLocation: 'Toronto, Canada',
    timeline: 'Summer 2015',
    contributions: [
      'Built a viewport handle for manipulating cones with non-uniform angles.',
      'Used C++ and OpenGL.'
    ],
    imagePath: sidefx_logo
  }
];

class Internships extends Component {
  render() {
    return (
      <div className="flexAlignCenterVertical">
        {INTERNSHIPS.map(internship =>
          <ImageHeadingPost
            textElements={[internship.companyName, internship.officeLocation, internship.timeline]}
            imagePath={internship.imagePath}
            contributions={internship.contributions}
            key={internship.companyName} />)}
        <ScrollToTopOnMount />
      </div>
    );
  }
}

export default Internships;

