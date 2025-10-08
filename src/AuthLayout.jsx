import React from "react";
// import './output.css';
import "./Login.css"; 

function AuthLayout({ children }) {
  return (
    <div className="relative w-full h-screen bg-[var(--bg-dark)] flex items-center justify-center overflow-hidden text-white
      before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-[55%] before:-translate-y-[45%] before:rotate-[25deg] before:scale-[1.4] before:w-[130vmin] before:h-[75vmin] before:rounded-full before:pointer-events-none before:mix-blend-screen before:filter before:blur-[100px] before:saturate-[110%] before:opacity-90 before:bg-[radial-gradient(closest-side,var(--teal-mid)_0%,rgba(58,108,119,0.12)_50%,rgba(9,17,21,0)_90%)]
      after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-[45%] after:rotate-[25deg] after:scale-[1.2] after:w-[130vmin] after:h-[75vmin] after:rounded-full after:pointer-events-none after:mix-blend-screen after:filter after:blur-[32px] after:saturate-[120%] after:opacity-100 after:bg-[radial-gradient(ellipse_at_center,var(--teal-core)_0%,rgba(58,108,119,0.9)_30%,var(--teal-mid)_60%,rgba(9,17,21,0)_95%)]"
    >

      <div className="absolute top-[5vh] w-full text-center text-[var(--orange)] flex flex-col gap-0.5">
        <h1 className="!m-0 p-0">Filmyfrolic</h1>
        <h3 className="!m-0 p-0">Everything About Movie</h3>
      </div>

      <div className="vignette"></div>
      {children} 
    </div>
  );
}

export default AuthLayout;
