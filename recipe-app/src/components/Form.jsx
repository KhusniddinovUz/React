import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className='Form' onSubmit={(e) => this.props.submit(e)}>
        <input
          type='text'
          onChange={(e) => this.props.change(e)}
          value={this.props.value}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default Form;
