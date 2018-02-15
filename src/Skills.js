import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {

  render() {
    return (
      <section className='skills'>
        <pre>{skills}</pre>
      </section>
    );
  }
}

const skills = `const skillsChecklist = {
  frontEnd: ['Javascript', 'ES6', 'React', 'Redux', 'HTML 5', 'CSS 3', 'JQuery', 'Bootstrap 4'],
  backEnd: ['Node.js', 'MongoDB', 'Express', 'Passport', 'Socket.io'],
  tools: ['Photoshop', 'Github', 'Heroku', 'Webpack', 'Gulp', 'Babel', 'AWS S3', 'Google Analytics']
}`

export default Skills;
