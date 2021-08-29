// ..., 173, 189, 193
import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  // 189
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // 193
    const lastPath = localStorage.getItem("lastPath") || "/";
    console.log(history);
    // it worsk as redirect
    // history.push("/");
    // it replaces the current addres in history with the new one
    // 189
    dispatch({
      type: types.login,
      payload: {
        name: "JGG",
      },
    });
    history.replace(lastPath);
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
