import React, { Component } from 'react';

import cyprus1 from './docs/cyprus1.jpg';
import cyprus2 from './docs/cyprus2.jpg';
import intramuralW16 from './docs/intramuralW16.jpeg';
import intramuralW17 from './docs/intramuralW17.jpg';
import intramuralF16 from './docs/intramuralF16.jpeg';
import KWClassicW16 from './docs/KWClassicW16.jpg';
import cbva from './docs/cbva.jpg';
import u18 from './docs/u18.jpeg';
import u22 from './docs/u22.jpeg';

import ScrollToTopOnMount from './ScrollToTopOnMount';
import ImageBodyPost from './ImageBodyPost';

const VOLLEYBALL = [
  {
    title: 'CBVA Open Bronze Medalist',
    eventLocation: 'Santa Cruz, CA',
    timeline: 'Summer 2017',
    imagePaths: [cbva]
  },
  {
    title: 'All-Star Intramural Champions',
    eventLocation: 'University of Waterloo',
    timeline: 'Winter 2017',
    imagePaths: [intramuralW17]
  },
  {
    title: 'All-Star Intramural Champions',
    eventLocation: 'University of Waterloo',
    timeline: 'Fall 2016',
    imagePaths: [intramuralF16]
  },
  {
    title: 'KW Classic Champions',
    eventLocation: 'Waterloo, Canada',
    timeline: 'Winter 2016',
    imagePaths: [KWClassicW16]
  },
  {
    title: 'All-Star Intramural Silver',
    eventLocation: 'University of Waterloo',
    timeline: 'Winter 2016',
    imagePaths: [intramuralW16]
  },
  {
    title: 'U22 Canadian Beach Volleyball Gold Medalist',
    eventLocation: 'Toronto, Canada',
    timeline: 'Summer 2014',
    imagePaths: [u22]
  },
  {
    title: 'U21 Beach Volleyball World Championships',
    eventLocation: 'Larnaca, Cyprus',
    timeline: 'Summer 2014',
    imagePaths: [cyprus1, cyprus2]
  },
  {
    title: 'U18 Canadian Beach Volleyball Gold Medalist',
    eventLocation: 'Vancouver, Canada',
    timeline: 'Summer 2013',
    imagePaths: [u18]
  },
];

class Volleyball extends Component {
  render() {
    return (
      <div className="flexAlignCenterVertical">
        {VOLLEYBALL.map(volleyball =>
          <ImageBodyPost
            headingElements={[volleyball.title, volleyball.eventLocation, volleyball.timeline]}
            imagePaths={volleyball.imagePaths}
            key={volleyball.title + volleyball.timeline} />)}
        <ScrollToTopOnMount />
      </div>
    );
  }
}

export default Volleyball;

