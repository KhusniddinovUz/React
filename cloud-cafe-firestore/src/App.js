import React from 'react';
import './App.scss';
import Cockpit from './components/Cockpit/Cockpit';
import Content from './components/Content/Content';

function App() {
  return (
    <div className='App'>
      <Cockpit />
      <Content />
    </div>
  );
}

export default App;
