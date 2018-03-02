import React, { Component } from 'react';

class ProjectItem extends Component {

  render() {
    const { link, github, img, title } = this.props;

    return (
      <div className='project-item-container'>
        <div className='project-details'>
          <div>
            <h3 className='title'>{title}</h3>
          </div>
          <div>
            <a href={link} target='_blank' rel='noopener noreferrer'>visit</a>
            {
              github
                ? <a href={github} target='_blank' rel='noopener noreferrer'>github</a>
                : null
            }
          </div>
        </div>
        <div
          className={'project-item'}
          style={{backgroundImage: `url('./img/${img}')`}}
        >
        </div>
      </div>
    );
  }
}

export default ProjectItem;