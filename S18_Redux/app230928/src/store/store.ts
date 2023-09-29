import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
