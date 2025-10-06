import React from 'react'
import AuthLayout from './AuthLayout';

function Recovery() {
  return (
    <AuthLayout>
      <div className="login-box">
        <h2>Account Recovery</h2>
        <form>
          <h5>Enter the email associated to Filmyfrolic account:</h5>
          <div className="input-container">
            <input type="email" placeholder="Enter email address" required />
          </div>
         

          <button type="submit">Send OTP</button>
              
        </form>
      </div>
    </AuthLayout>
  )
}

export default Recovery