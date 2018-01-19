import React, { Component } from 'react';
import './App.css';
import Projects from './Projects.js';
import Landing from './Landing.js';
import About from './About.js';
import Skills from './Skills.js';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Landing />
        <About />
        <Projects />
        <Skills />
        <footer>
          © 2018 Kenneth Lu Malicay. All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
