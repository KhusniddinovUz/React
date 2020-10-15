import React, { Component, Suspense } from 'react';
import Movie from './Movie';

export class Movies extends Component {
  render() {
    return (
      <div className="Movies">
        {this.props.movies &&
          this.props.movies.map((mov, index) => (
            <Movie key={index} obj={mov} />
          ))}
      </div>
    );
  }
}

export default Movies;
