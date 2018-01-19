import React, { Component } from 'react';
import './About.css';

class About extends Component {

  render() {
    return (
      <article className='about'>
        <h1>About me</h1>

        <p>I like being around like minded people, learning, innovating and solving algorithms. I found myself going to meetups like <a href='https://www.meetup.com/ReactNYC' target='_blank' rel='noopener noreferrer'>React NYC</a> to keep myself up to date and meet new people. I also like solving algorithm problems on <a href='https://www.codewars.com/users/kennethlumalicay' target='_blank' rel='noopener noreferrer'>codewars</a> and <a href='https://www.codingame.com/profile/33c8b8376be610e47e927e4828dc4d5d8618002' target='_blank' rel='noopener noreferrer'>codingame</a> on my spare time.</p>

        <p>My projects include web applications with dynamic web content, live content update and server side rendering.</p>

        <p>Recently I have been using MERN stack which is MongoDB, Express, React and Node.js. Aside from that I use Redux for state management, Socket.io for live updates, Webpack and Babel for building, Github for version control and Heroku for hosting.</p>

        <p>An evidence of my passion to build a great application is <a href='https://www.betterweb.tech/' target='_blank' rel='noopener noreferrer'>BetterWeb</a>. I made this to encourage giving and asking for feedback in the web development community.</p>

        <p>I believe feedback is the key to growth so let's spread it.</p>
      </article>
    );
  }
}

export default About;