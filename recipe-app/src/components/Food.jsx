import React, { Component } from 'react';

class Food extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className='Food'>
        <div></div>
        <img src={data['image']} alt={data['label']} />
      </div>
    );
  }
}

export default Food;
