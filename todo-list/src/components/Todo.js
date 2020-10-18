import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {
  state = {
    done: false,
  };

  checkHandler = (e, index) => {
    const parent = document.getElementById(index);
    const icon = e.target;
    if (!this.state.done) {
      parent.style.textDecoration = 'line-through';
      icon.className = 'fas fa-times';
      parent.style.opacity = '0.7';
    } else {
      parent.style.textDecoration = '';
      icon.className = 'fas fa-check-circle';
      parent.style.opacity = '1';
    }
    this.setState({ done: !this.state.done });
  };

  render() {
    let { name, index } = this.props;
    let res = '';
    if (name.length > 20) {
      for (let i = 0; i < 18; i++) {
        res += name[i];
      }
      res += '...';
    } else {
      res = name;
    }
    return (
      <div className="Todo" id={index}>
        <h3>{`${index + 1}. ${res}`}</h3>
        <div className="icons">
          <i
            className="fas fa-check-circle"
            onClick={(e) => this.checkHandler(e, index)}
          />
          <i
            className="fas fa-trash"
            onClick={(event) => this.props.delete(event, index)}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
