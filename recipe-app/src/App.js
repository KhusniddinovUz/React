import React, { Component } from 'react';
import Form from './components/Form';
import axios from 'axios';
import { APP_ID, APP_KEY } from './data';
import './index.scss';
import Food from './components/Food';
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      query: '',
      data: [],
    };
  }
  getRecipe = async () => {
    const resp = await axios.get(
      `https://api.edamam.com/search?q=${this.state.query}cola&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await resp['data']['hits'];
    let response = data.map((item) => item['recipe']);
    this.setState({ data: response });
  };

  inputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({ query: this.state.inputValue, inputValue: '' });
    this.getRecipe();
  };

  render() {
    return (
      <div className='App'>
        <Form
          change={this.inputChange}
          submit={this.formSubmit}
          value={this.state.inputValue}
        />
        <div className='Foods'>
          {this.state.data &&
            this.state.data.map((data) => (
              <Food data={data} key={data['label']} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
