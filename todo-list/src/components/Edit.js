import React, { Component } from 'react';

class Edit extends Component {
  render() {
    return (
      <div className="Input">
        <form>
          <input type="text" placeholder="Edit To Do" />
          <button type="submit" className="search">
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export default Edit;
