import React from 'react';
import './Form.scss';
import { db } from '../../firebase';

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const form = document.querySelector('.Form');
    console.log(form.name);
    // db.collection('caefs').add({
    //   name: form.name.value,
    //   city: form.city.value,
    // });
  };
  return (
    <div className='Form' onSubmit={submitHandler}>
      <form>
        <input type='text' name='name' placeholder='Cafe Name' />
        <input type='text' name='city' placeholder='Cafe City' />
        <button type='submit'>Add Cafe</button>
      </form>
    </div>
  );
};

export default Form;
