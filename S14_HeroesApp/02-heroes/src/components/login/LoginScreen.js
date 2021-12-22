// ..., 174
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  // 174
  const navigate = useNavigate();

  // 174
  const handleLogin = () => {
    console.log("handle login");
    navigate("/dc", { replace: "true" });
  };
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
