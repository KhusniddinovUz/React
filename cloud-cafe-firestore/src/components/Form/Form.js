import React from 'react';
import './Form.scss';

const Form = () => {
  return (
    <div className='Form'>
      <form>
        <input type='text' name='name' placeholder='Cafe Name' />
        <input type='text' name='city' placeholder='Cafe City' />
        <button type='submit'>Add Cafe</button>
      </form>
    </div>
  );
};

export default Form;
