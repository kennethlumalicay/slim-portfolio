import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Projects.css';
import projectsJson from './projects.json';
import ProjectItem from './ProjectItem.js';
import ProjectShown from './ProjectShown.js';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      selected: 0,
      pending: 0,
      changeSelect: true
    }
  }

  categorizeProjects(items) {
    let categorized = {};
    for(const item of items) {
      if(categorized.hasOwnProperty(item.category)) {
        categorized[item.category] = [
          ...categorized[item.category],
          item
        ];
      } else {
        categorized = {
          ...categorized,
          [item.category]: [item]
        };
      }
    }
    return categorized;
  }

  renderProjects(items) {
    return items.map((e,i) => <ProjectItem key={e.title.replace(/\W/g, '')} {...e}/>);
  }

  renderCategories(list) {
    return Object.entries(list).map(([category, items]) => (
      <section key={category} className={'category ' + category}>
        <h3>{category.replace(/-/g,' ')}</h3>
        <div className={'projects-list ' + category}>
          { this.renderProjects(items) }
        </div>
      </section>
    ));
  }

  handleMove(right) {
    const { listElem } = this.refs;
    const { scrollWidth, clientWidth } = listElem;
    const move = clientWidth/2;
    const maxWidth = scrollWidth - clientWidth;
    const divisor = clientWidth < 768 ? 50 : 80;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if((right && listElem.scrollLeft >= maxWidth)
        || (!right && listElem.scrollLeft <= 0)
      ) {
        clearInterval(this.interval);
      }
      listElem.scrollLeft += right ? move/divisor : -move/divisor;
    });
  }

  handleMoveStop() {
    clearInterval(this.interval);
  }

  handleSelect(index) {
    const { selected } = this.state;
    this.setState({
      pending: index,
      changeSelect: selected === index
    });
  }

  handleExited() {
    const { pending } = this.state;
    this.setState({
      selected: pending,
      changeSelect: true
    });
  }

  render() {
    const { pending, changeSelect } = this.state;
    const projectsList = projectsJson.items.map((e,i) => (
      <ProjectItem
        key={e.title.replace(/\W/g, '')}
        {...e}
        select={event => this.handleSelect(i)}
        selected={pending===i}
      />
    ));
    const shownItem = projectsJson.items[this.state.selected];
    return (
      <section className='projects'>
        <h1>Projects</h1>
        <CSSTransition
          in={changeSelect}
          classNames='project'
          timeout={200}
          onExited={() => this.handleExited()}
        >
          <ProjectShown {...shownItem}/>
        </CSSTransition>
        <div className='projects-container'>
          <button
            onMouseDown={event => this.handleMove(false)}
            onMouseUp={event => this.handleMoveStop()}
            onTouchStart={event => this.handleMove(false)}
            onTouchEnd={event => this.handleMoveStop()}
          ><img src='./img/arrow-left.png' alt='<'/></button>
          <div className='projects-list' ref='listElem'>
            { projectsList }
          </div>
          <button
            onMouseDown={event => this.handleMove(true)}
            onMouseUp={event => this.handleMoveStop()}
            onTouchStart={event => this.handleMove(true)}
            onTouchEnd={event => this.handleMoveStop()}
          ><img src='./img/arrow-right.png' alt='>'/></button>
        </div>
      </section>
    );
  }
}

export default Projects;
