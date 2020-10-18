import React, { Component } from 'react';
import Cockpit from './components/Cockpit';
import Input from './components/Input';
import Todo from './components/Todo';
import { uuid } from 'uuidv4';

class App extends Component {
  state = {
    data: [],
    currentValue: '',
  };

  buttonClickHandler = (e) => {
    e.preventDefault();
    if (this.state.currentValue !== '') {
      const dataCopy = [...this.state.data];
      const todo = { name: this.state.currentValue, id: uuid() };
      dataCopy.push(todo);
      this.setState({ data: dataCopy, currentValue: '' });
      document.querySelector('.search').style.background = '#ccc';
      document.querySelector('.search').style.color = '#333';
    }
  };

  inputChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      document.querySelector('.search').style.background = '#F0656B';
      document.querySelector('.search').style.color = '#fff';
    } else {
      document.querySelector('.search').style.background = '#ccc';
      document.querySelector('.search').style.color = '#333';
    }
    this.setState({ currentValue: e.target.value });
  };

  deleteClickHandler = async (e, index) => {
    let parent = e.target.parentElement.parentElement;
    parent.style.animationName = 'exiting';
    console.log(parent);
    setTimeout(() => {
      const dataCopy = [...this.state.data];
      dataCopy.splice(index, 1);
      console.log(dataCopy);
      this.setState({ data: dataCopy });
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <Cockpit />
        <Input
          click={this.buttonClickHandler}
          change={this.inputChangeHandler}
          value={this.state.currentValue}
        />
        {/*<Edit />*/}
        <div className="Todos">
          {this.state.data &&
            this.state.data.map((it, ind) => (
              <Todo
                name={it.name}
                key={it.id}
                index={ind}
                delete={this.deleteClickHandler}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
