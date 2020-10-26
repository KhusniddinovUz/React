import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, replaceTodo } from '../redux/todoActions';

const Todo = (props) => {
  const [check, setCheck] = useState(false);
  const remove = useDispatch();
  const replace = useDispatch();
  let inStyle = {};

  const checkHandler = (index) => {
    setCheck(!check);
    props.todo.done = !props.todo.done;
    replace(replaceTodo(props.todo.done, index));
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
      <input type='checkbox' onClick={(index) => checkHandler(props.index)} />
      <div style={inStyle}>{props.todo.name}</div>
      <i
        className='fas fa-times-circle icon'
        onClick={() => removetodo(props.todo.id)}
      />
    </div>
  );
};

export default Todo;
