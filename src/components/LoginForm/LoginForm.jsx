import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
// import videoBg from '../Assests/videoBg.mp4'
import './LoginForm.css'


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <>
    <div className='main'>

    
    <form className="formPanel" onSubmit={login}>
     
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className="input-container">
        
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div className='input-container'>
        <label htmlFor="password">
          Password:
          <input
            type="password" 
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div> 
    </form>
   
    
    </div>

    {/* <form class="form">
    <span class="input-span">
    <label for="email" class="label">Email</label>
    <input type="email" name="email" id="email"/></span>
    <span class="input-span">
    <label for="password" class="label">Password</label>
    <input type="password" name="password" id="password"/></span>
    <span class="span"><a href="#">Forgot password?</a></span>
  <input class="submit" type="submit" value="Log in"/>
  <span class="span">Don't have an account? <a href="#">Sign up</a></span>
  </form> */}
    
    </>
  );
}

export default LoginForm;
