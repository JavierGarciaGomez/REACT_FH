// 125, 126, 127, 128, 129, 130, 131, 132
import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "../styles.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  { id: new Date().getTime(), desc: "Learn Node.js", done: false },
  { id: new Date().getTime() + 1, desc: "Learn React", done: false },
];
const init = () => {
  // return initialState;
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const TodoApp = () => {
  // 125
  const [todosState, dispatch] = useReducer(todoReducer, initialState, init);
  console.log(todosState);

  // 128
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosState));
  }, [todosState]);

  // 129
  const deleteTodoHandler = (id) => {
    dispatch({
      type: "del",
      payload: id,
    });
  };

  // 130
  const toggleTodo = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  return (
    <div>
      <h1>TodoApp: {todosState.length}</h1>
      <hr />
      <div className="row">
        <TodoList
          todos={todosState}
          handleDelete={deleteTodoHandler}
          handleComplete={toggleTodo}
        ></TodoList>
        <TodoAdd handleAddTodo={dispatch} />
      </div>
    </div>
  );
};
