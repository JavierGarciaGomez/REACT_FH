import { AuthState } from "../../src/types/types";

export const initialState: AuthState = {
  status: "checking",
  user: undefined,
  errorMessage: undefined,
};

export const authenticatedState: AuthState = {
  status: "authenticated",
  user: {
    uid: "abc",
    name: "Fernando",
  },
  errorMessage: undefined,
};

export const notAuthenticatedState: AuthState = {
  status: "not-authenticated",
  user: undefined,
  errorMessage: undefined,
};
