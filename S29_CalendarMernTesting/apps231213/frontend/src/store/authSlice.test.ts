import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState, AuthUser } from "../types/types";

const initialState: AuthState = {
  errorMessage: undefined,
  status: "checking",
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      (state.errorMessage = undefined),
        (state.user = undefined),
        (state.status = "checking");
    },
    onLogin: (state, { payload }: PayloadAction<AuthUser>) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }: PayloadAction<string>) => {
      console.log({ payload });
      state.status = "not-authenticated";
      state.user = undefined;
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
