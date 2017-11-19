import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import MLPaper from './MLPaper.js';
import NavBar from './NavBar.js';
import Internships from './Internships';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/Internships' component={Internships} />
        <Route exact path='/FaceRecognitionLiteratureSurvey' component={MLPaper} />
      </div>
    );
  }
}

export default App;
