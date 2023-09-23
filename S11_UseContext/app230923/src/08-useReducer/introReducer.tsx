import { TodoPrev, TodoActionPrev } from "./types/types";

const initialState: TodoPrev[] = [
  {
    id: 1,
    todo: "Learn React",
    done: false,
  },
];

const todoReducerPre = (
  state: TodoPrev[] = initialState,
  action: TodoActionPrev
): TodoPrev[] => {
  switch (action.type) {
    case "[TODO] add todo":
      if (action.payload) {
        return [...state, action.payload];
      }
      return state;

    default:
      return state;
  }
};

const newTodo = {
  id: 2,
  todo: "Recolectar la priedra del poder",
  done: false,
};

const action = {
  type: "[TODO] add todo",
  payload: newTodo,
};
const todos = todoReducerPre(initialState, action);

export const executeSth = () => {
  console.log({ todos });
};
