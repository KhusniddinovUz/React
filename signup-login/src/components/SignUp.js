import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });
  const [border, setBorder] = useState('form-control');

  const submitHandler = (e) => {
    e.preventDefault();
    if (passwordValid()) {
      // Fetch API for signup
    }
  };

  const changeHandler = (e) => {
    const newuser = Object.assign({}, user, { [e.target.id]: e.target.value });
    setUser(newuser);
  };

  const passwordValid = () => {
    if (user.password1 === user.password2 && user.password1.length > 6) {
      setBorder('form-control');
      return true;
    } else {
      setBorder('border-danger form-control');
      return false;
    }
  };

  return (
    <div className='container SignUp p-3'>
      <h1 className='mt-4 p-1 text-center'>Signup for user profile</h1>
      <form onSubmit={submitHandler}>
        <div className='form-group p-2 '>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            className='form-control'
            id='username'
            placeholder='Enter Username'
            onChange={changeHandler}
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
            onChange={changeHandler}
          />
        </div>
        <div className='form-group p-2'>
          <label htmlFor='password1'>Password</label>
          <input
            type='password'
            className={border}
            id='password1'
            placeholder='Password'
            onChange={changeHandler}
          />
          <small>Must be 6 chars at least</small>
        </div>
        <div className='form-group p-2'>
          <label htmlFor='password2'>Repeat Password</label>
          <input
            type='password'
            className={border}
            id='password2'
            placeholder='Password'
            onChange={changeHandler}
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
