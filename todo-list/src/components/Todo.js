import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {
  render() {
    const { name, index } = this.props;
    return (
      <div className="Todo" id={index}>
        <h3>{`${index + 1}. ${name}`}</h3>
        <div className="icons">
          <i className="fas fa-pen" />
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
