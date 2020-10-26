import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, replaceTodo } from '../redux/todoActions';

const Todo = (props) => {
  const state = useSelector((state) => state);
  const remove = useDispatch();
  const replace = useDispatch();
  let inStyle = {};

  const checkHandler = (e) => {
    let index = state.todo.findIndex((i) => i.id === props.todo.id);
    props.todo.done = !props.todo.done;
    replace(replaceTodo(props.todo.done, index));
  };

  const removetodo = (id) => {
    remove(removeTodo(id));
  };

  if (props.todo.done) {
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
      <input type='checkbox' onClick={(e) => checkHandler(e)} />
      <div style={inStyle}>{props.todo.name}</div>
      <i
        className='fas fa-times-circle icon'
        onClick={() => removetodo(props.todo.id)}
      />
    </div>
  );
};

export default Todo;
