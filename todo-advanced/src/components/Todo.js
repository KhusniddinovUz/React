import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoActions';

const Todo = (props) => {
  const [check, setCheck] = useState(false);
  const state = useSelector((state) => state);
  const remove = useDispatch();
  console.log(state);
  let inStyle = {};

  const checkHandler = () => {
    setCheck(!check);
  };

  const removetodo = (id) => {
    remove(removeTodo(id));
  };

  if (check) {
    inStyle = {
      textDecoration: 'line-through',
      opacity: '0.9',
      color: '#ccc',
    };
  } else {
    inStyle = {
      textDecoration: 'none',
    };
  }

  return (
    <div className='Todo'>
      <input type='checkbox' onClick={checkHandler} />
      <div style={inStyle}>{props.name}</div>
      <i
        className='fas fa-times-circle icon'
        onClick={() => removetodo(props.id)}
      />
    </div>
  );
};

export default Todo;
