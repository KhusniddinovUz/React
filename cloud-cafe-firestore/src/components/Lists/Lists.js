import React from 'react';
import List from '../List/List';
import './Lists.scss';

const Lists = (props) => {
  return (
    <div className='Lists'>
      {props.data &&
        props.data.map((cafe) => {
          return <List cafe={cafe} key={cafe.id} />;
        })}
    </div>
  );
};

export default Lists;
