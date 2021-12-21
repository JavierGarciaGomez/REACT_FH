import React, { useContext } from "react";
import { Redirect, useNavigate } from "react-router-dom";
import { Navigate, Route } from "react-router-dom";

import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const { setuser } = userContext;
  return (
    <div>
      <h1>Login Screen</h1>
      <hr></hr>

      <button
        className="btn btn-primary"
        onClick={() => {
          setuser({
            id: 123,
            name: "Otro nombre",
            email: "email@mail.com",
          });
          navigate("/");
        }}
      >
        Accede con otro usuario
      </button>
    </div>
  );
};

export default LoginScreen;
