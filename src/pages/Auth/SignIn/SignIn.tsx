import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import '../Auth.css';

const SignIn: FC = () => {
  return (
    <div className='wrapper'>
      <h2 className='auth-title'>SignIn</h2>
      <form className='auth-form'>
        <div className='auth-input-container'>
          <h3 className='input-title'>Email</h3>
          <input
            className='auth-input'
            type='email'
            autoComplete='on'
            required
          />
        </div>
        <div className='auth-input-container'>
          <h3 className='input-title'>Password</h3>
          <input
            className='auth-input'
            type='password'
            autoComplete='on'
            required
          />
        </div>
        <div className='auth-input-container'>
          <input
            className='primary-button'
            type='submit'
            value='Sign In'
          />
        </div>
      </form>
      <h2 className='auth-info'>
        Do not have an account yet?
        <NavLink to='/signup' className='link'>Register now</NavLink>
      </h2>
    </div>
  );
};

export default SignIn;
