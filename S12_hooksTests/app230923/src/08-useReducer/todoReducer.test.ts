import { todoReducer } from "./todoReducer";
import {
  Todo,
  AddTodoAction,
  RemoveTodoAction,
  ToggleTodoAction,
  UnknownAction,
} from "./types/types";

describe("todoReducer", () => {
  const initialState: Todo[] = [
    { id: 1, description: "Buy groceries", done: false },
    { id: 2, description: "Go to the gym", done: false },
  ];

  it("should return the initial state", () => {
    const action: UnknownAction = {
      type: "[TODO] unknown action",
      payload: undefined,
    };
    const newState = todoReducer(initialState, action);
    expect(newState).toBe(initialState);
  });
  it("should add a todo", () => {
    const initialState: Todo[] = [];

    const action: AddTodoAction = {
      type: "[TODO] add todo",
      payload: { id: 1, description: "Buy groceries", done: false },
    };
    const nextState = todoReducer(initialState, action);
    expect(nextState).toEqual([
      { id: 1, description: "Buy groceries", done: false },
    ]);
  });

  it("should remove a todo", () => {
    const initialState: Todo[] = [
      { id: 1, description: "Buy groceries", done: false },
      { id: 2, description: "Go to the gym", done: false },
    ];
    const action: RemoveTodoAction = { type: "[TODO] remove todo", payload: 1 };
    const nextState = todoReducer(initialState, action);
    expect(nextState).toEqual([
      { id: 2, description: "Go to the gym", done: false },
    ]);
  });

  it("should toggle a todo's completion status", () => {
    const initialState = [
      { id: 1, description: "Buy groceries", done: false },
      { id: 2, description: "Go to the gym", done: false },
    ];
    const action: ToggleTodoAction = { type: "[TODO] toggle todo", payload: 1 };
    const nextState = todoReducer(initialState, action);
    expect(nextState).toEqual([
      { id: 1, description: "Buy groceries", done: true },
      { id: 2, description: "Go to the gym", done: false },
    ]);
  });
});
