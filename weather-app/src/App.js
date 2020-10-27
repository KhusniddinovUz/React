import React, { Component } from 'react';
import sunny from './media/sunny.jpg';
import raining from './media/raining.jpg';
import cloudy from './media/cloudy.jpg';
import './index.scss';

class App extends Component {
  state = {
    data: {},
    type: sunny,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const value = document.getElementById('search').value;
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=2f96ebd33fbe89fdc545dcfef0fe55b6`
    );
    const response = await data.json();
    const type = response['weather'][0]['main'];
    document.getElementById('search').value = '';
    this.setState({ data: response });
    if (type === 'Clouds' || type === 'Mist' || type === 'Smoke') {
      this.setState({ type: cloudy });
    } else if (type === 'Raining') {
      this.setState({ type: raining });
    } else {
      this.setState({ type: sunny });
    }
  };

  render() {
    return (
      <div className='App'>
        <img className='img' alt='weather' src={this.state.type} />
        <div>
          <form className='form' onSubmit={(e) => this.getWeather(e)}>
            <input type='text' id='search' />
            <button type='submit'>Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
