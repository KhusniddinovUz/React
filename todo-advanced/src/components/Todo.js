import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, replaceTodo } from '../redux/todoActions';

const Todo = (props) => {
  const state = useSelector((state) => state);
  const [check, setCheck] = useState(false);
  const remove = useDispatch();
  const replace = useDispatch();
  let inStyle = {};

  const checkHandler = () => {
    let index = state.todo.findIndex((i) => i.id === props.todo.id);
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
      <input type='checkbox' onClick={checkHandler} />
      <div style={inStyle}>{props.todo.name}</div>
      <i
        className='fas fa-times-circle icon'
        onClick={() => removetodo(props.todo.id)}
      />
    </div>
  );
};

export default Todo;
