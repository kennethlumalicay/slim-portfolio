import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove(e) {
    const x = (e.screenX-window.innerWidth/2)/45;
    const y = (e.screenY-window.innerHeight/2)/45;
    this.setState({
      x: x,
      y: y
    });
  }

  render() {
    const { x , y } = this.state;
    return (
      <header className='landing' onMouseMove={(e) => this.handleMouseMove(e)}>
        <h1 className='name'>Kenneth Lu Malicay</h1>
        <div>
          <h2 className='title'>Front End Web Developer</h2>
          <span>|</span>
          <h2 className='address'>NY</h2>
        </div>
        <img
          className='landing-img'
          src='./img/kenneth.png'
          alt='Hi!'
          style={{
            transform: `rotateX(${y*1.5}deg) rotateY(${x*1.5}deg) translate(${x}px, ${y}px)`
          }}
        />
        <div className='email'>
          <a href='mailto:kennethlumalicay@gmail.com' target='_blank' rel='noopener noreferrer'>kennethlumalicay@gmail.com</a>
        </div>
        <div className='links'>
          <a href='https://github.com/kennethlumalicay' target='_blank' rel='noopener noreferrer'>github</a>
          <span>|</span>
          <a href='https://www.linkedin.com/in/kennethlumalicay/' target='_blank' rel='noopener noreferrer'>linkedin</a>
          <span>|</span>
          <a href='https://codepen.io/kennethlumalicay/' target='_blank' rel='noopener noreferrer'>codepen</a>
          <span>|</span>
          <a href='https://twitter.com/nethoinkz' target='_blank' rel='noopener noreferrer'>twitter</a>
        </div>
      </header>
    );
  }
}

export default Landing;