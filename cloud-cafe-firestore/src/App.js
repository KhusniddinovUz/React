import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Cockpit from './components/Cockpit/Cockpit';
import Content from './components/Content/Content';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoader] = useState(false);
  const load = useSelector((state) => state.loading);
  useEffect(() => {
    setLoader(load);
  });

  return (
    <div className='App'>
      <Cockpit />
      {loading ? <Loader /> : <Content />}
    </div>
  );
}

export default App;
