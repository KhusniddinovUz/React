import React, { Component } from 'react';
import sunny from './media/sunny.jpg';
import raining from './media/raining.jpg';
import cloudy from './media/cloudy.jpg';

class App extends Component {
  state = {
    search: '',
    type: sunny,
  };
  render() {
    return (
      <div className='App'>
        <form className='form'>
          <input type='text' id='search' />
          <button type='submit'>Search</button>
        </form>
        <img className='img' alt='weather' src={this.state.type} />
      </div>
    );
  }
}

export default App;
