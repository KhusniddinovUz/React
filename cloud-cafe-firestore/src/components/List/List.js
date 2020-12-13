import React from 'react';
import './List.scss';
import { db } from '../../firebase';

const List = (props) => {
  const deleteHandler = (e) => {
    const id = props.cafe.id;
    db.collection('cafes').doc(id).delete();
  };
  return (
    <div className='List'>
      <div className='name'>{props.cafe.data().name}</div>
      <div className='city'>
        <i className='fas fa-thumbtack' />
        {props.cafe.data().city}
      </div>
      <i className='fas fa-trash' onClick={(e) => deleteHandler(e)} />
    </div>
  );
};

export default List;
