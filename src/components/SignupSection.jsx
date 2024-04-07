import React, { useState } from 'react';
import './SignupSection.css';

const SignupSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='container'>
      <div className={'formBox'}>
        <div className={'buttonBox'}>
          <div
            className={`${'signup-btn'} ${isLogin ? 'btnLoginActive' : 'btnRegisterActive'}`}
          />
          <button
            type="button"
            className={`${'toggleBtn'} ${isLogin ? 'active' : ''}`}
            onClick={toggleForm}
          >
            Log In
          </button>
          <button
            type="button"
            className={`${'toggleBtn'} ${!isLogin ? 'active' : ''}`}
            onClick={toggleForm}
          >
            Register
          </button>
        </div>
        {isLogin ? (
          <form id="login" className={'inputGroup'}>
            <input
              type="text"
              className={'inputField'}
              placeholder="Email"
              required
            />
            <input
              type="password"
              className={'inputField'}
              placeholder="Password"
              required
            />
            <button type="submit" className={'submitBtn'}>
              Log In
            </button>
          </form>
        ) : (
          <form id="register" className={'inputGroup'}>
            <input
              type="text"
              className={'inputField'}
              placeholder="Username"
              required
            />
            <input
              type="email"
              className={'inputField'}
              placeholder="Email"
              required
            />
            <input
              type="password"
              className={'inputField'}
              placeholder="Password"
              required
            />
            <button type="submit" className={'submitBtn'}>
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupSection;