import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import { useSelector } from 'react-redux';
const App = () => {
  const state = useSelector((state) => state);
  return (
    <div className='App'>
      <h1>Todos</h1>
      <div className='box'>
        <Form />
        <div className='todos'>
          {state && state.map((i) => <Todo name={i.name} key={i.id} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
