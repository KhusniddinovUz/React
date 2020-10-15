import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {
  render() {
    const { name, index } = this.props;
    return (
      <div className="Todo" id={index}>
        <h3>{`${index}. ${name}`}</h3>
        <div className="icons">
          <i className="fas fa-pen"/>
          <i
    className="fas fa-trash"
    onClick={(e) => this.props.delete(e, index)}
    />
        </div>
      </div>
    );
  }
}

export default Todo;
