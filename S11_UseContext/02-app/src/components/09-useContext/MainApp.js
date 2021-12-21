import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {
  const initialUser = {
    id: 123,
    name: "Javier",
    email: "email@mail.com",
  };

  const [user, setuser] = useState(initialUser);
  return (
    <UserContext.Provider value={{ user, setuser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
