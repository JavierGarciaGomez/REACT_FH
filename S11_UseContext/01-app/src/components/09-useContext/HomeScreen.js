// ..., 140
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h1>Home Screen</h1>
      <pre>{JSON.stringify(user, null)}</pre>
      <p>Hello, {user.name}</p>

      <hr></hr>
    </div>
  );
};
