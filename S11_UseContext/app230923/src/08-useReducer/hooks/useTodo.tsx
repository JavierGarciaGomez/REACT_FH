import { useEffect, useReducer } from "react";
import {
  AddTodoAction,
  RemoveTodoAction,
  Todo,
  ToggleTodoAction,
} from "../types/types";
import { todoReducer } from "../todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || "[]");
};

// const initialState = [
//   { id: new Date().getTime(), description: "Learn React", done: false },
//   { id: new Date().getTime() * 100, description: "Learn Next", done: false },
// ];

const initialState: Todo[] = [];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const handleAddTodo = (value: string) => {
    const newTodo: Todo = {
      id: new Date().getTime(),
      description: value,
      done: false,
    };

    const action = {
      type: "[TODO] add todo",
      payload: newTodo,
    } as AddTodoAction;
    dispatch(action);
  };

  const handleRemoveTodo = (id: number) => {
    const action = {
      type: "[TODO] remove todo",
      payload: id,
    } as RemoveTodoAction;
    dispatch(action);
  };

  const handleToggleTodo = (id: number) => {
    const action = {
      type: "[TODO] toggle todo",
      payload: id,
    } as ToggleTodoAction;
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodo,
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
