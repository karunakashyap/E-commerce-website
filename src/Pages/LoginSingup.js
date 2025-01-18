import React from 'react';
import './CSS/LoginSingUp.css'

const LoginSingup = () => {
  return (
    <div className='loginSignUp'>
      <div className="container">
        <h1>SighUp</h1>
        <div className="fields">
          <input type="text" placeholder='Your Name' />
          <input type='email' placeholder='Email Address'></input>
          <input type='password' placeholder='password'></input>
        </div>
        <button>Continue</button>
        <p className="login">Already have an account?<span>Login here</span></p>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSingup
