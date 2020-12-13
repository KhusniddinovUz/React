import React from 'react';
import './List.scss';

const List = (props) => {
  return (
    <div className='List'>
      <div className='name'>{props.cafe.name}</div>
      <div className='city'>
        <i className='fas fa-thumbtack' />
        {props.cafe.city}
      </div>
    </div>
  );
};

export default List;
