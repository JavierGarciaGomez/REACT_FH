import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types/storeTypes";

const initialState: AuthState = {
  status: "checking",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state;
    },
    logout: (state) => {
      state;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
