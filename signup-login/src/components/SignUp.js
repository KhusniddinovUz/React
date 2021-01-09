import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='container SignUp p-3'>
      <h1 className='mt-4 p-1 text-center'>Signup for user profile</h1>
      <form>
        <div className='form-group p-2 '>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            className='form-control'
            id='username'
            placeholder='Enter Username'
          />
        </div>
        <div className='form-group p-2 '>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
        </div>
        <div className='form-group p-2'>
          <label htmlFor='password1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password1'
            placeholder='Password'
          />
        </div>
        <div className='form-group p-2'>
          <label htmlFor='password2'>Repeat Password</label>
          <input
            type='password'
            className='form-control'
            id='password2'
            placeholder='Password'
          />
        </div>
        <div className='container d-flex align-items-center mt-2'>
          <button type='submit' className='btn btn-primary'>
            Register
          </button>
          <div className='text-center w-100'>
            Already have an account? <Link to='/login'>Login</Link> here
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
