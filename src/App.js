import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import MLPaper from './MLPaper.js';
import Resume from './Resume.js';
import Transcript from './Transcript.js';
import Adventures from './Adventures.js';
import NavBar from './NavBar.js';
import Research from './Research.js';
import Internships from './Internships.js';
import Hackathons from './Hackathons.js';
import Volleyball from './Volleyball.js';
import Grades from './Grades.js';

const SPACE = {
  minHeight: 70
};

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={SPACE} />
        <Route exact path='/' component={Adventures} />
        <Route exact path='/internships' component={Internships} />
        <Route exact path='/research' component={Research} />
        <Route exact path='/volleyball' component={Volleyball} />
        <Route exact path='/hackathons' component={Hackathons} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/transcript' component={Transcript} />
        <Route exact path='/faceRecognitionLiteratureSurvey' component={MLPaper} />
        <Route exact path='/grades' component={Grades} />
      </div>
    );
  }
}

export default App;
