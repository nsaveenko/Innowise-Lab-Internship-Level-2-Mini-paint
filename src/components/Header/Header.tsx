import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ERRORS from '../../utils/errors';
import './Header.css';

export default function Header() {
  const history = useHistory();
  const { currentUserEmail, signout } = useAuth();
  const [error, setError] = useState<string>('');

  async function handleLogOut() {
    setError('');

    try {
      await signout();
      localStorage.removeItem('currentUser');
      history.push('/signin');
    } catch {
      setError(ERRORS.SIGN_OUT_MESSAGE);
    }
  }

  if (error !== '') {
    alert(error);
  }

  const handleDraw = () => {
    history.push('/editor');
  };

  return (
    <div className='header'>
      <NavLink to='/' className='page-title'>Paint</NavLink>
      <h3 className='email-title'>{currentUserEmail}</h3>
      <button
        className='primary-button header-button'
        type='submit'
        onClick={handleDraw}
      >
        Draw
      </button>
      <button
        className='primary-button header-button'
        type='submit'
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}
