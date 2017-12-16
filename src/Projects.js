import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }

  handleProjects(index) {
    this.setState({
      selected: index
    });
  }

  render() {
    const { selected } = this.state;
    const list = data.map((e,i) => (
      <div
        key={i}
        className={'project-item' + (i===selected ? ' selected' : '')}
        onClick={() => this.handleProjects(i)}
        style={{backgroundImage: `url('./img/${e.img}')`}}
      >
      </div>
    ));

    const selectedProject = data[selected];

    return (
      <div className='projects'>
        <div key={'project' + selected} className='project-shown' style={{backgroundImage: `url('./img/${selectedProject.img}')`}}>
          <div>
            <h3 className='shown-title'>{selectedProject.title}</h3>
            <p className='shown-description'>{selectedProject.description}</p>
            <div className='shown-links'>
              <a href={selectedProject.link} target='_blank' rel='noopener noreferrer'>website</a>
              <span>|</span>
              <a href={selectedProject.github} target='_blank' rel='noopener noreferrer'>github</a>
            </div>
          </div>
        </div>
        <div className='projects-list'>
          {list}
        </div>
      </div>
    );
  }
}

const data = [
  {
    title: 'BetterWeb',
    description: 'This is a community for developers and web owners to share their websites or web applications and give each other feedback and suggestions.',
    link: 'https://www.betterweb.tech/',
    github: 'https://github.com/kennethlumalicay/betterweb/#readme',
    img: 'betterweb.jpg'
  },
  {
    title: 'Nightlife App',
    description: 'Search for nightlife activities in your desired location.',
    link: 'https://nightlife-app-klm.herokuapp.com/',
    github: 'https://github.com/kennethlumalicay/nightlife-app/#readme',
    img: 'nightlife.jpg'
  },
  {
    title: 'ASD Album',
    description: 'Browse and share photos!',
    link: 'https://asd-album.herokuapp.com/',
    github: 'https://github.com/kennethlumalicay/asd-album/#readme',
    img: 'asd-album.jpg'
  },
  {
    title: 'Book Switch',
    description: 'Browse books and request the books you like! You can also add your own book for people to see!',
    link: 'https://book-trade-app-klm.herokuapp.com/',
    github: 'https://github.com/kennethlumalicay/book-trade-app/#readme',
    img: 'book-switch.jpg'
  },
  {
    title: 'Voting App',
    description: 'Vote on polls made by other users or make your own!',
    link: 'https://voting-app-klm.herokuapp.com/',
    github: 'https://github.com/kennethlumalicay/voting-app/#readme',
    img: 'voting.jpg'
  },
  {
    title: 'Stock Chart',
    description: 'Follow stock market prices of desired companies.',
    link: 'https://stock-chart-app-klm.herokuapp.com/',
    github: 'https://github.com/kennethlumalicay/stock-chart-app/#readme',
    img: 'stock-chart.jpg'
  }
];

export default Projects;
