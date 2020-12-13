import React, { useState } from 'react';
import './App.scss';
import Cockpit from './components/Cockpit/Cockpit';
import Content from './components/Content/Content';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoader] = useState(false);

  return (
    <div className='App'>
      <Cockpit />
      {loading ? <Loader /> : <Content />}
    </div>
  );
}

export default App;
