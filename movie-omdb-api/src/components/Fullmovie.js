import React, { Component } from 'react';
import { API_KEY, API, PROXY } from '../data';
import { Link } from 'react-router-dom';

class Fullmovie extends Component {
  state = {
    movie: {},
    loading: true,
  };
  componentDidMount() {
    fetch(`${PROXY}${API}/?i=${this.props.match.params.id}&apikey=${API_KEY}`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ movie: data, loading: false });
      });
  }

  render() {
    const { movie, loading } = this.state;
    let content = (
      <svg
        className="loading"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: 'auto',
          background: 'none',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width="100px"
        height="100px"
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

    if (!loading) {
      content = (
        <div className="Fullmovie">
          <Link to="/" className="exitLink">
            <i className="fas fa-arrow-circle-left exit"></i>
          </Link>
          <div className="poster">
            <img
              src={movie['Poster']}
              alt="Not available"
              width="300"
              height="470"
            />
          </div>
          <div className="all">
            <h1>{movie['Title']}</h1>
            <p>
              Production: <span>{movie['Production']}</span>
            </p>
            <p>
              Director: <span>{movie['Director']}</span>
            </p>
            <p>
              Awards: <span>{movie['Awards']}</span>
            </p>
            <p>
              Country: <span>{movie['Country']}</span>
            </p>
            <p>
              Actors: <span>{movie['Actors']}</span>
            </p>
            <p>
              Genre: <span>{movie['Genre']}</span>
            </p>
            <p>
              Writer: <span>{movie['Writer']}</span>
            </p>
            <p>
              Year: <span>{movie['Year']}</span>
            </p>
          </div>
        </div>
      );
    }

    return content;
  }
}

export default Fullmovie;
