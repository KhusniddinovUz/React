import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className='container project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            ipsam voluptatum maiores ducimus at sapiente a quaerat voluptates
            nihil ad, quas saepe aliquid sint, id minima sit soluta. Cupiditate,
            laudantium.
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by KhUz</div>
          <div>January 9</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
