import React, { Component } from 'react';

import ootm from './docs/ootm.jpg';
import ootm_scores from './docs/ootm_scores.png';
import google_games from './docs/google_games.png';
import google_games_word from './docs/google_games_word.png';

import ScrollToTopOnMount from './ScrollToTopOnMount';
import ImageBodyPost from './ImageBodyPost';

const ADVENTURES = [
  {
    title: 'Odyssey of the Mind World Finals, Second Place',
    eventLocation: 'Iowa State University, Ames, IA',
    timeline: 'Summer 2016',
    projectPoints: [
      'Competed in Problem III, Division IV: Aesop Gone Viral.',
      'Wrote and performed an 8 minute play linking an Aesop fable to the origins of the universe.',
      'Won second place overall, with highest scores in long-term problem and style categories.',
      <a href='https://www.youtube.com/watch?v=ejWdy2SVL0Q' target='_blank' rel='noopener noreferrer'>{'Watch the video!'}</a>
    ],
    imagePaths: [ootm, ootm_scores]
  },
  {
    title: 'Google Games, Second Place',
    eventLocation: 'Google Office, Waterloo, Canada',
    timeline: 'Winter 2016',
    projectPoints: [
      'Team Name: The Mathies',
      'Competed in trivia, logic puzzles, coding challenges, and word association puzzles.',
      'Won second place overall, with highest scores in trivia and word association.',
    ],
    imagePaths: [google_games, google_games_word]
  },
];

class Adventures extends Component {
  render() {
    return (
      <div className="flexAlignCenterVertical">
        {ADVENTURES.map(adventure =>
          <ImageBodyPost
            headingElements={[adventure.title, adventure.eventLocation, adventure.timeline]}
            headingPoints={adventure.projectPoints}
            imagePaths={adventure.imagePaths}
            key={adventure.title} />)}
        <ScrollToTopOnMount />
      </div>
    );
  }
}

export default Adventures;

