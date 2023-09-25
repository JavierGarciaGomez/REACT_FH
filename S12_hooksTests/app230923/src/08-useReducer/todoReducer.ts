import { Todo, TodoAction } from "./types/types";

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case "[TODO] add todo":
      if (action.payload) {
        return [...state, action.payload];
      }
      break;

    case "[TODO] remove todo":
      if (action.payload !== undefined) {
        return state.filter((todo) => todo.id !== action.payload);
      }
      break;

    case "[TODO] toggle todo":
      if (action.payload !== undefined) {
        return state.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        });
      }
      break;

    default:
      // Use type assertion to handle unknown actions
      return state;
  }
  return state;
};
