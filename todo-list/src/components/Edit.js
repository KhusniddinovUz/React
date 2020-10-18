import React, { Component } from 'react';
import './Edit.scss';
class Edit extends Component {
  render() {
    return (
      <div className="Edit" id={this.props.index}>
        <form>
          <input type="text" placeholder="Edit To Do" />
          <button>Edit</button>
        </form>
      </div>
    );
  }
}

export default Edit;
