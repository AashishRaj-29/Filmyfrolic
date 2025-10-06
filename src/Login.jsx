import React from 'react'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { PiLockKeyFill } from "react-icons/pi";
import { PiLockKeyOpenFill } from "react-icons/pi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Recovery from './Recovery';
import AuthLayout from './AuthLayout';

function Login() {
  const [showPassword,setShowPassword]=useState(false);
  return (
    // <div className="login-bg">
    //   <div className="title">
    //     <h1>Filmyfrolic</h1>
    //     {/* <br/> */}
    //     <h3>Everything About Movie</h3>
    //   </div>
      
      // <div className="vignette"></div>
      <AuthLayout>
      <div className="login-box">
        
        <h2>Log in</h2>
        <form>
          <h5>Email:</h5>
          <div className="input-container">
            <input type="text" placeholder="Enter your email address" required />
            <FaUser className="user-icon"/>
          </div>
          
          <h5>Password:</h5>
          <div className="password-container">
            <input type={showPassword?"text":"password"} placeholder="Enter your email password" required />
            {!showPassword ?<PiLockKeyFill className='password-icon' onClick={() => setShowPassword(true)}/>:<PiLockKeyOpenFill className='password-icon' onClick={() => setShowPassword(false)}/> }
            
          </div>
          
          {/* <a className="forget-container" href="">Forgot Password?</a> */}
          <Link className='forget-container' to="/recovery">Forgot Password?</Link>
          {/* <div></div> */}
          <button type="submit">Log In</button>
          {/* <p>Don't have an account? <a href="">Sign Up</a></p>   */}
          <p>Don't have an account?<Link to="/signup">Sign Up</Link></p>        
        </form>
      </div>
        </AuthLayout>
    
  )
}

export default Login