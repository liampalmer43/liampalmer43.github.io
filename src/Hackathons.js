import React, { Component } from 'react';

import hack_harvard from './docs/hack_harvard.jpg';
import hack_harvard1 from './docs/hack_harvard1.jpeg';
import picto_story from './docs/picto_story.png';
import holyoke1 from './docs/holyoke1.jpeg';
import holyoke2 from './docs/holyoke2.jpeg';
import holyoke3 from './docs/holyoke3.jpg';
import giddit from './docs/giddit.png';
import myo from './docs/myo.png';

import ScrollToTopOnMount from './ScrollToTopOnMount';
import ImageBodyPost from './ImageBodyPost';

const HACKATHONS = [
  {
    title: 'Hack Holyoke',
    university: 'Mount Holyoke College',
    eventLocation: 'South Hadley, MA',
    timeline: 'Fall 2016',
    projectPoints: [
      'Built giddit.io, a web app for sharing and searching for specific advice (two-person team).',
      'Used React, Flux, CSS, and AWS S3.',
      'Winner of Best AWS Hack Prize.'
    ],
    imagePaths: [holyoke1, holyoke2, holyoke3, giddit]
  },
  {
    title: 'Hack Harvard',
    university: 'Harvard University',
    eventLocation: 'Cambridge, MA',
    timeline: 'Fall 2016',
    projectPoints: [
      'Created PictoStory, a web app for uploading photos and generating random short stories from those photos (solo project).',
      'Leveraged Microsoft’s Computer Vision and Emotion APIs to translate photos into words, and a context free grammar to create sentence structure.',
      'Used React, Flux, and CSS.'
    ],
    imagePaths: [hack_harvard, hack_harvard1, picto_story]
  },
  {
    title: 'Hack OHI/O',
    university: 'Ohio State University',
    eventLocation: 'Columbus, OH',
    timeline: 'Fall 2016',
    projectPoints: [
      'Developed an app on Mac for the Myo Armband that allows users to draw on an imaginary canvas with their arm (three-person team).',
      'Various gestures activated a variety of drawing utensils.',
      'Used C++, Myo Armband SDK for Mac'
    ],
    imagePaths: [myo]
  },
];

class Hackathons extends Component {
  render() {
    return (
      <div className="flexAlignCenterVertical">
        {HACKATHONS.map(hackathon =>
          <ImageBodyPost
            headingElements={[hackathon.title, hackathon.university, hackathon.eventLocation, hackathon.timeline]}
            headingPoints={hackathon.projectPoints}
            imagePaths={hackathon.imagePaths}
            key={hackathon.title} />)}
        <ScrollToTopOnMount />
      </div>
    );
  }
}

export default Hackathons;

