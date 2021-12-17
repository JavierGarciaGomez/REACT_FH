// ..., 141
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  // 141 tasks
  // obtener referencia al context
  const { user, setUser } = useContext(UserContext);
  // extaer el set user
  // insertar objeto al lick

  console.log("", user, setUser);
  const newUser = {
    id: 123,
    name: "javierrito",
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={() => setUser(newUser)}>
        Login
      </button>
    </div>
  );
};
