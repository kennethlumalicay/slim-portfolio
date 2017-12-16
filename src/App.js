import React, { Component } from 'react';
import './App.css';
import Projects from './Projects.js';
import Landing from './Landing.js';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Landing />
        <Projects />
      </div>
    );
  }
}

export default App;
