import React from "react";
import "./Login.css"; // reuse the same css for background

function AuthLayout({ children }) {
  return (
    <div className="login-bg">
      <div className="title">
        <h1>Filmyfrolic</h1>
        <h3>Everything About Movie</h3>
      </div>
      <div className="vignette"></div>
      {children} {/* login-box or signup-box or recovery-box */}
    </div>
  );
}

export default AuthLayout;
