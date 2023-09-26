import { AuthAction, AuthActionTypes, AuthState } from "../../types/types";

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        user: { ...action.payload },
        logged: true,
      };
    }

    case AuthActionTypes.LOGOUT: {
      return { ...state, logged: false, user: undefined };
    }

    default:
      return state;
  }
};
