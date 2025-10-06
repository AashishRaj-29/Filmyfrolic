import React from 'react'
import AuthLayout from './AuthLayout';
import { PiLockKeyFill } from "react-icons/pi";
import { PiLockKeyOpenFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {

  return (
    <AuthLayout>
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <h5>Your Name:</h5>
          <div className="input-container">
            <input type="text" placeholder="First and Last Name" required />
          </div>
          <h5>Your Email:</h5>
          <div className="input-container">
            <input type="text" placeholder="Enter your email address" required />            
          </div>
          
          <h5>Password:</h5>
          <div className="password-container">
            <input type="password" placeholder="Atleast 8 characters" required />                        
          </div>

          <h5>Re-Enter Password:</h5>
          <div className="password-container">
            <input type="password"  required />                        
          </div>

          <button type="submit">Create Your Account</button>
              
        </form>
      </div>
      <div className="back-button">
      <p><Link to="/">{"< Back"}</Link></p>
      </div>
    </AuthLayout>
  )
}

export default Signup