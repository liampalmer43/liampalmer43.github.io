import React, { Component } from 'react';

import uwaterloo_logo from './docs/uwaterloo_logo.gif';

import ScrollToTopOnMount from './ScrollToTopOnMount';
import ImageHeadingPost from './ImageHeadingPost.js';

const RESEARCH = [
  {
    title: 'Undergraduate Research Assistant',
    context: 'University of Waterloo',
    timeline: 'Fall 2016 & Winter 2017',
    contributions: [
      'Contributed to the programming language Flix, designed for static analysis on programs.',
      'Mentored by Professor Ondřej Lhoták (University of Waterloo) and Professor Magnus Madsen (Aalborg University).',
      'Implemented a Flix data structure library for types List, Set, Map, Option, and Result, along with integer types (Int8, Int16, Int32, Int64, BigInt) and float types (Float32, Float64).',
      'Wrote tree shaking and optimization compilation phases for Flix in Scala.',
      <a href='http://flix.github.io/' target='_blank' rel="noopener noreferrer">{'Flix Website'}</a>,
      <a href='http://flix.github.io/api/' target='_blank' rel="noopener noreferrer">{'Flix Data Structure Library'}</a>,
    ],
    imagePath: uwaterloo_logo
  },
  {
    title: 'Face Recognition Literature Survey',
    context: 'University of Waterloo',
    timeline: 'Winter 2017',
    contributions: [
      'Wrote a literature survey on face recognition as part of CS489 Machine Learning.',
      'Summarized and compared holistic, feature-based, and hybrid techniques from six publications.',
      <a href='http://liampalmer43.github.io/me/#/faceRecognitionLiteratureSurvey' target='_blank' rel="noopener noreferrer">{'View Literature Survey'}</a>,
    ],
    imagePath: uwaterloo_logo
  },
];

class Research extends Component {
  render() {
    return (
      <div className="flexAlignCenterVertical">
        {RESEARCH.map(research =>
          <ImageHeadingPost
            textElements={[research.title, research.context, research.timeline]}
            imagePath={research.imagePath}
            imageWidth={120}
            imageHeight={120}
            contributions={research.contributions}
            key={research.title} />)}
        <ScrollToTopOnMount />
      </div>
    );
  }
}

export default Research;

