export type Hero = {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export enum AuthActionTypes {
  LOGIN = "AUTH - LOGIN",
  LOGOUT = "AUTH - LOGOUT",
}

export interface LoginAction {
  type: AuthActionTypes.LOGIN;
  payload: User;
}

export interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;

export type AuthState = {
  logged: boolean;
  user?: User;
};
