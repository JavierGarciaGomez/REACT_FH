// 125, 126, 127, 128, 129, 130, 131, 132
import React, { useEffect, useReducer } from "react";
import "../styles.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //   128 cuando todos cambien, se guardan en local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //   129
  const handleDelete = (todoId) => {
    const action = {
      type: "del",
      payload: todoId,
    };
    dispatch(action);
  };

  //   130
  const handleComplete = (todoId) => {
    const action = {
      type: "toggle",
      payload: todoId,
    };
    dispatch(action);
  };

  //   132
  const handleAddTodo = (newTodo) => {
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>
        TodoApp (<small> {todos.length} </small>)
      </h1>
      <hr></hr>
      <div className="row">
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
        <TodoAdd handleAddTodo={handleAddTodo} />
      </div>
    </div>
  );
};
