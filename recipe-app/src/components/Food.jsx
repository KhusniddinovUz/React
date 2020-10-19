import React, { Component } from 'react';
import image from '../utensils-solid.svg';
class Food extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='Food'>
        <ul>
          {data['ingredientLines'].map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className='img'>
          <h1>{data['label']}</h1>
          <p>{data['calories']}kkal</p>
          <img src={data['image']} alt={data['label']} />
        </div>
      </div>
    );
  }
}

export default Food;
