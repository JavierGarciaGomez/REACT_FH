import { useReducer } from "react";

import { AuthAction, AuthActionTypes, User } from "../../types/types";
import { AuthContext, authReducer } from ".";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const initialState = { logged: false, user: undefined };
  const init = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    return {
      logged: !!user,
      user,
    };
  };
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (user: User) => {
    const action: AuthAction = {
      type: AuthActionTypes.LOGIN,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    const action: AuthAction = {
      type: AuthActionTypes.LOGOUT,
    };

    localStorage.removeItem("user");
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ login, authState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
