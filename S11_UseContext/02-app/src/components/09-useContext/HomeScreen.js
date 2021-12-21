// 137
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { name } = user;
  console.log("user context", userContext);
  return (
    <div>
      <h1>Home Screen</h1>
      <h2> Bienvenido, {name}</h2>
    </div>
  );
};

export default HomeScreen;
