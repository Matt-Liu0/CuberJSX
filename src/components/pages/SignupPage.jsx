import React from 'react';
import SignUp from '../SignupSection';
import './SignupPage.css'

const SignUpPage = () => {
  return (
    <div>
      <div className='title-container'>
        <h1>Here to Sign Up/Login</h1>
      </div>
      <SignUp />
      {/* Add any additional content or components for your signup page */}
    </div>
  );
};

export default SignUpPage;