import { configureStore } from "@reduxjs/toolkit";
import { authSlice, uiSlice, calendarSlice } from ".";

export const store = configureStore({
  reducer: {
    uiReducer: uiSlice.reducer,
    calendarReducer: calendarSlice.reducer,
    authReducer: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
