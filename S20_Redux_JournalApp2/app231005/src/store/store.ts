import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from ".";
import { journalSlice } from "./journal";

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    journalReducer: journalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
