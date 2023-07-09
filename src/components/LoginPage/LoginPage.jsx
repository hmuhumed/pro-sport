import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import videoBg from "../Assests/video (2160p).mp4"
// import { useEffect, useRef } from 'react';
import './LoginPage.css'



function LoginPage() {
  const history = useHistory();

  // const VideoBackground = ({ src }) => {
  //   const videoRef = useRef(null);
  
  //   useEffect(() => {
  //     if (videoRef.current) {
  //       videoRef.current.play();
  //     }
  //   }, []);

  return (
    // <div>
    // <video src={videoBg} autoPlay loop muted />
    // <div>
      
    //   <LoginForm />
      
    //   <center>
    //     <button
    //       type="button"
    //       className="btn btn_asLink"
    //       onClick={() => {
    //         history.push('/registration');
    //       }}
    //     >
    //       Register
    //     </button>
    //   </center>
    // </div>
    // </div>
    <div  style={{ position: 'relative' }}>
      
  <video
  
    src={videoBg}
    autoPlay
    loop  
    muted
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
    }}
  />
  <div style={{ position: 'relative', padding: '20px', borderRadius: '5px' }}>
    <LoginForm />

    <center>
      <button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push('/registration');
        }}
      >
        Register
      </button>
    </center>
  </div>
</div>

  );
}

export default LoginPage;
