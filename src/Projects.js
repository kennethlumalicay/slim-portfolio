import React, { Component } from 'react';
import './Projects.css';
import projectsJson from './projects.json';
import ProjectItem from './ProjectItem.js';

class Projects extends Component {

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

  render() {
    const categorized = this.categorizeProjects(projectsJson.items);
    const renderedProjects = this.renderCategories(categorized);

    return (
      <section className='projects'>
        <h1>Projects</h1>
          { renderedProjects }
      </section>
    );
  }
}

export default Projects;
