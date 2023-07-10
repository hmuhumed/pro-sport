import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import "./RegisterPage.css"
function RegisterPage() {
  const history = useHistory();

  const domWidth = document.documentElement.clientWidth;
  const domHeight = document.documentElement.clientHeight;

  console.log("DOM Width:", domWidth);
  console.log("DOM Height:", domHeight);

  return (
    <div className='register'>
      <RegisterForm />

      <center>
        <button
          style={{color: "white" , fontWeight: "bolder"}}
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
