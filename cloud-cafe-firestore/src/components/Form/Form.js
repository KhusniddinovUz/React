import React from 'react';
import './Form.scss';

const Form = (props) => {
  return (
    <div className='Form' onSubmit={(e) => props.submit(e)}>
      <form>
        <input type='text' id='name' placeholder='Cafe Name' />
        <input type='text' id='city' placeholder='Cafe City' />
        <button type='submit'>Add Cafe</button>
      </form>
    </div>
  );
};

export default Form;
