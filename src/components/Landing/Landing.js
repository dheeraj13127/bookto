import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className='btn center-align'
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        SignUp/Login
      </button>
    
    </div>
  );
}

export default Landing;
