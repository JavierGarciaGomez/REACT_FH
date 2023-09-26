import { createContext } from "react";
import { AuthState, User } from "../../types/types";

type AuthContextType = {
  login: (user: User) => void;
  logout: () => void;
  authState: AuthState;
};

const initialState = { logged: false };

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  authState: initialState,
});
