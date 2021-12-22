// 171, 188

import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  console.log(localStorage.getItem("user"));
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

function App() {
  const [userState, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!userState) return;

    localStorage.setItem("user", JSON.stringify(userState));
  }, [userState]);

  return (
    <AuthContext.Provider value={{ userState, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
