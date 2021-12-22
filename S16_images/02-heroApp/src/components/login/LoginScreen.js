// ..., 174, 192
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  // 174
  const navigate = useNavigate();

  // 192
  const authContext = useContext(AuthContext);
  const { dispatch } = authContext;

  // 174
  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: { id: 1, name: "username from handleLogin" },
    });

    const lastPath = localStorage.getItem("lastPath") || "/";

    navigate(lastPath, { replace: "true" });
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
