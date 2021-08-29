// 171, 188

import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

// 188
// revisa si hay algo en el local storage, si no regresa logged false
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

function App() {
  // 188
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    return () => {};
  }, [user]);

  return (
    // 188
    <AuthContext.Provider value={{ user, dispatch }}>
      <h1>Heroes App</h1>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
