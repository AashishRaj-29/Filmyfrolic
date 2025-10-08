
// import React from "react";
// import './Login.css'; 
// import { FaUser } from "react-icons/fa";
// import { PiLockKeyFill, PiLockKeyOpenFill } from "react-icons/pi";
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Signup from './Signup'; 
// import AuthLayout from './AuthLayout';  

// function Login() {
//   const [showPassword,setShowPassword]=useState(false);

//   return (
//     <AuthLayout>
//       <div className="relative z-20 bg-[rgba(15,26,34,0.85)] p-8 pt-0.5 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.6)] w-1/5 h-[330px] text-center flex flex-col">
//         <h2 className="mb-8 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans">Log in</h2>

//         <form>
//           <h5>Email:</h5>
//           <div className="flex items-center w-full bg-white rounded-md pr-2.5 box-border">
//             <input type="text" placeholder="Enter your email address" required />
//             <FaUser className="user-icon"/>
//           </div>

//           <h5>Password:</h5>
//           <div className="password-container">
//             <input type={showPassword?"text":"password"} placeholder="Enter your email password" required />
//             {!showPassword ?
//               <PiLockKeyFill className='password-icon' onClick={() => setShowPassword(true)}/> :
//               <PiLockKeyOpenFill className='password-icon' onClick={() => setShowPassword(false)}/> 
//             }
//           </div>

//           <Link className='forget-container' to="/recovery">Forgot Password?</Link>

//           <button type="submit">Log In</button>

//           <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//         </form>
//       </div>
//     </AuthLayout>
//   );
// }

// export default Login;



import React, { useState } from "react";
import './Login.css'; 
import { FaUser } from "react-icons/fa";
import { PiLockKeyFill, PiLockKeyOpenFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';  

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <div className="relative z-20 bg-[rgba(15,26,34,0.85)] p-8 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.6)] w-1/5 h-auto text-center flex flex-col gap-6">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans mb-4">
          Log in
        </h2>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col text-left gap-1">
            <label className="text-white font-medium">Email:</label>
            <div className="flex items-center bg-white rounded-md pr-2.5">
              <input 
                type="text" 
                placeholder="Enter your email address" 
                required 
                className="flex-1 p-2 outline-none rounded-l-md"
              />
              <FaUser className="text-gray-500 ml-2"/>
            </div>
          </div>

          <div className="flex flex-col text-left gap-1">
            <label className="text-white font-medium">Password:</label>
            <div className="flex items-center bg-white rounded-md pr-2.5">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                required 
                className="flex-1 p-2 outline-none rounded-l-md"
              />
              { !showPassword ?
                <PiLockKeyFill className='text-gray-500 ml-2 cursor-pointer' onClick={() => setShowPassword(true)}/> :
                <PiLockKeyOpenFill className='text-gray-500 ml-2 cursor-pointer' onClick={() => setShowPassword(false)}/> 
              }
            </div>
          </div>

          <Link className='text-teal-400 text-sm self-end hover:underline' to="/recovery">
            Forgot Password?
          </Link>

          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md mt-2">
            Log In
          </button>

          <p className="text-white text-sm mt-2">
            Don't have an account? <Link className="text-teal-400 hover:underline" to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
