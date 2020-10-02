import React, { useEffect, useState } from 'react';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { API, API_KEY, PROXY } from './data';
import Fullmovie from './components/Fullmovie';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    requestHandler(search);
  }, [search]);

  const searchButtonClickHandler = (e) => {
    e.preventDefault();
    if (query !== '') {
      setMovies([]);
      setSearch(query);
      setQuery('');
    }
  };

  const selectChangeHandler = (value, setObjs = movies) => {
    const filtered = [...setObjs];
    filtered.sort((a, b) => {
      if (a[value] > b[value]) return 1;
      if (a[value] < b[value]) return -1;
      if (a[value] === b[value]) return 0;
    });
    setMovies(filtered);
  };

  const inputChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const requestHandler = async (q) => {
    if (q !== '') {
      setLoading(true);
      const moviesResp = await fetch(
        `${PROXY}${API}/?s=${q}&apikey=${API_KEY}`
      );
      const moviesR = await moviesResp.json();
      setMovies(await moviesR['Search']);
      setLoading(false);
      selectChangeHandler('Title', moviesR['Search']);
    }
  };

  let loadingAnim = (
    <svg
      className="loading"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        background: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shapeRendering: 'auto',
      }}
      width="160px"
      height="160px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        fill="none"
        stroke="#ffffff"
        strokeWidth="8"
        strokeDasharray="42.76482137044271 42.76482137044271"
        d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
        strokeLinecap="round"
        style={{ transform: 'scale(1)', transformOrigin: '50px 50px' }}
      >
        <animate
          attributeName="stroke-dashoffset"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0;256.58892822265625"
        />
      </path>
    </svg>
  );

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Navbar
                  selectChange={(e) => selectChangeHandler(e)}
                  input={(event) => inputChangeHandler(event)}
                  searchButton={(e) => searchButtonClickHandler(e)}
                  inputValue={query}
                />
                {loading ? loadingAnim : <Movies movies={movies} />}
              </>
            )}
          />
          <Route path="/view:id?" exact component={Fullmovie} />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
