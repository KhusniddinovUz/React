import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  console.log(project);
  return (
    <div className='card z-depth-0 project-summary myBox'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title '>{project.title}</span>
        <p>
          Posted by {`${project.authorFirstName} `}
          {project.authorLastName}
        </p>
        <p className='grey-text'>
          {moment(project.createdAt.toDate()).format('MMM Do YYYY')}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
