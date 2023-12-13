import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from ".";
import { calendarSlice } from "./ui/calendarSlice";

export const store = configureStore({
  reducer: {
    uiReducer: uiSlice.reducer,
    calendarReducer: calendarSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
