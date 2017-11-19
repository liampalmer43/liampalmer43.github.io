import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import MLPaper from './MLPaper.js';
import Resume from './Resume.js';
import Transcript from './Transcript.js';
import NavBar from './NavBar.js';
import Internships from './Internships';
import Volleyball from './Volleyball';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/internships' component={Internships} />
        <Route exact path='/volleyball' component={Volleyball} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/transcript' component={Transcript} />
        <Route exact path='/faceRecognitionLiteratureSurvey' component={MLPaper} />
      </div>
    );
  }
}

export default App;
