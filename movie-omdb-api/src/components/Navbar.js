import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <h1>The Movie Search App</h1>
        <div className="form-select">
          <form onSubmit={(e) => this.props.searchButton(e)}>
            <input
              type="search"
              onChange={(event) => this.props.input(event)}
              value={this.props.inputValue}
            />
            <button className="search" type="submit">
              Search
            </button>
          </form>
          <select onChange={(e) => this.props.selectChange(e.target.value)}>
            <option value="Title">Sort by name</option>
            <option value="Year">Sort by year</option>
          </select>
        </div>
      </div>
    );
  }
}
export default Navbar;
