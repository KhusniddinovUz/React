import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Cockpit from './components/Cockpit/Cockpit';
import Content from './components/Content/Content';
import Loader from './components/Loader/Loader';

function App() {
  const load = useSelector((state) => state.loading);

  console.log('App ', load);
  return (
    <div className='App'>
      <Cockpit />
      {load ? <Loader /> : <Content />}
    </div>
  );
}

export default App;
