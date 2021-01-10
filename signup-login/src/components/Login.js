import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const changeHandler = (e) => {
    const newuser = Object.assign({}, user, { [e.target.id]: e.target.value });
    setUser(newuser);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //Fetch API for login
    console.log(user);
  };

  return (
    <div className='container SignUp p-3'>
      <h1 className='mt-4 p-1 text-center'>Login via username</h1>
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

        <div className='form-group p-2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='Password'
            onChange={changeHandler}
          />
        </div>
        <div className='container d-flex align-items-center mt-2'>
          <button type='submit' className='btn btn-primary'>
            Register
          </button>
          <div className='text-center w-100'>
            Don't have an account? <Link to='/signup'>Signup</Link> here
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
