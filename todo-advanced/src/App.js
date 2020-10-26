import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import { useSelector } from 'react-redux';
import Filter from './components/Filter';
const App = () => {
  const state = useSelector((state) => state);
  let todos;
  if (state.filter === 'all') {
    todos = [...state.todo];
  } else if (state.filter === 'active') {
    todos = state.todo.filter((i) => i.done === false);
  } else if (state.filter === 'done') {
    todos = state.todo.filter((i) => i.done === true);
  }
  return (
    <div className='App'>
      <h1>Todos</h1>
      <div className='box'>
        <Form />
        <div className='todos'>
          {todos && todos.map((i) => <Todo key={i.id} todo={i} />)}
        </div>
        <Filter />
      </div>
    </div>
  );
};

export default App;
