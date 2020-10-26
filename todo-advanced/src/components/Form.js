import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoActions';
import { v4 as uuidv4 } from 'uuid';
const Form = () => {
  const state = useSelector((state) => state);
  const add = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let value = document.getElementById('input').value;
    if (value !== '') {
      document.getElementById('input').value = '';
      let todo = {
        name: value,
        id: uuidv4(),
        done: false,
        index: state.length,
      };
      add(addTodo(todo));
    }
  };
  return (
    <form className='Form' onSubmit={(e) => submitHandler(e)}>
      <input type='text' id='input' placeholder='What needs to be done?' />
    </form>
  );
};

export default Form;
