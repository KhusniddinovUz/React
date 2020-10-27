import React, { Component } from 'react';
import sunny from './media/sunny.jpg';
import raining from './media/raining.jpg';
import cloudy from './media/cloudy.jpg';
import './index.scss';

class App extends Component {
  state = {
    search: '',
    type: sunny,
  };
  render() {
    return (
      <div className='App'>
        <img className='img' alt='weather' src={this.state.type} />
        <div>
          <form className='form'>
            <input type='text' id='search' />
            <button type='submit'>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
