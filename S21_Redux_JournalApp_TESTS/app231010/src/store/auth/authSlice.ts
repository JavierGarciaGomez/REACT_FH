import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState, LoginPayload, LogoutPayload } from "../../types/storeTypes";

const initialState: AuthState = {
  status: "checking",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;
      state.status = "authenticated";
      state.errorMessage = undefined;
    },
    logout: (state, action: PayloadAction<LogoutPayload | undefined>) => {
      state.status = "not-authenticated";
      state.uid = undefined;
      state.email = undefined;
      state.displayName = undefined;
      state.photoURL = undefined;
      state.errorMessage = action?.payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
