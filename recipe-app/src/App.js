import React, { Component } from 'react';
import Form from './components/Form';
import axios from 'axios';
import { APP_ID, APP_KEY } from './data';
import './index.scss';
import Food from './components/Food';
class App extends Component {
  state = {
    inputValue: '',
    query: '',
    data: [],
  };
  getRecipe = async (value) => {
    console.log(value);
    console.log(this.state);
    const resp = await axios.get(
      `https://api.edamam.com/search?q=${value}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    let data = resp['data']['hits'].map((item) => item['recipe']);
    this.setState({ data: data });
  };

  inputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.getRecipe(this.state.inputValue);
    this.setState({ query: this.state.inputValue, inputValue: '' });
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
