import React, { Component, Fragment } from 'react';

class ProjectShown extends Component {

  render() {
    const { link, github, img, title, description, category } = this.props;

    return (
      <div className={'project-shown ' + category}>
        <div
          className='container'
          style={{backgroundImage: `url('./img/${img}')`}}
        >
        </div>
        <div className='project-details'>
          <div>
            <h3 className='title'>
              <span>{title}</span>
            </h3>
            <p className='description'>{ description }</p>
          </div>
          <div>
            <a href={link} target='_blank' rel='noopener noreferrer'>website</a>
            {
              github
                ? (
                  <Fragment>
                    <span>|</span>
                    <a href={github} target='_blank' rel='noopener noreferrer'>github</a>
                  </Fragment>
                )
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShown;