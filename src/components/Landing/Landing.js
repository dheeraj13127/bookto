import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className='btn'
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        SignUp/Login
      </button>
      <Navbar />
    </div>
  );
}

export default Landing;
