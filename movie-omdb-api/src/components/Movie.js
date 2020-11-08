import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {
  render() {
    return (
      <Link to={'/view' + this.props.obj.imdbID}>
        <div className="Movie" onClick={() => {}}>
          <img
            src={this.props.obj['Poster']}
            alt="Not available"
            className="poster"
            width="100%"
            height="210"
          />
          <div>
            <h3>{this.props.obj['Title']}</h3>
            <p>Year: {this.props.obj['Year']}</p>
          </div>
        </div>
      </Link>
    );
  }
}
export default Movie;
