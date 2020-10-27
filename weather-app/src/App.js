import React, { Component } from 'react';
import sunny from './media/sunny.jpg';
import raining from './media/raining.jpg';
import cloudy from './media/cloudy.jpg';
import './index.scss';

class App extends Component {
  state = {
    data: '',
    type: sunny,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const value = document.getElementById('search').value;
    if (value !== '') {
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=2f96ebd33fbe89fdc545dcfef0fe55b6`
      );
      const response = await data.json();
      if (response['cod'] !== '404') {
        const type = response['weather'][0]['main'];
        document.getElementById('search').value = '';
        this.setState({ data: response });
        if (type === 'Clouds' || type === 'Mist' || type === 'Smoke') {
          this.setState({ type: cloudy });
        } else if (type === 'Rain') {
          this.setState({ type: raining });
        } else {
          this.setState({ type: sunny });
        }
      }
    }
  };

  render() {
    return (
      <div className='App'>
        <img className='img' alt='weather' src={this.state.type} />
        <div className='wrapper'>
          <form className='form' onSubmit={(e) => this.getWeather(e)}>
            <input type='text' id='search' placeholder='Search for city...' />
            <button type='submit'>Search</button>
          </form>
          {this.state.data !== '' && (
            <div className='more'>
              <ul>
                <li>City</li>
                <li>Country</li>
                <li>Temperature</li>
                <li>Weather</li>
              </ul>
              <ul>
                <li>{this.state.data['name']}</li>
                <li>{this.state.data['sys']['country']}</li>
                <li>
                  {`${parseInt(this.state.data['main']['temp'] - 273)}`}
                  &#x2103;
                </li>
                <li>{this.state.data['weather'][0]['main']}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
