// ..., 173
import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    console.log(history);
    // it worsk as redirect
    // history.push("/");
    // it replaces the current addres in history with the new one
    history.replace("/");
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
