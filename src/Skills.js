import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {

  render() {
    return (
      <article className='skills'>
        <pre>{skills}</pre>
      </article>
    );
  }
}

const skills = `const mySkills = {
  webDev: {
    frontEnd: ['HTML 5', 'CSS 3', 'JS', 'ES6', 'React', 'Redux', 'JQuery', 'Bootstrap 4'],
    backEnd: ['Node.js', 'MongoDB', 'Express', 'Passport', 'Socket.io'],
    tools: ['Github', 'Heroku', 'Webpack', 'Babel', 'AWS S3', 'Google Analytics']
  },
  other: {
    programming: ['Java', 'JavaFX', 'C++', 'Android', 'SQL'],
    adobe: ['Photoshop'],
    microsoft: ['Word', 'Excel', 'Powerpoint']
  }
}`

export default Skills;
