// 125, 126, 127, 128, 129, 130, 131
import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "../styles.css";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
  console.log(JSON.parse(localStorage.getItem("todos")));
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //   128
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  //   128 cuando todos cambien, se guardan en local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log("printing form values", description);

  //   127
  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.trim().length < 2) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

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

  return (
    <div>
      <h1>
        TodoApp (<small>{todos.length}</small>)
      </h1>
      <hr></hr>
      <div className="row">
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
        <div className="col-5">
          Agregar TODO
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Aprender..."
              className="form-control"
              onChange={handleInputChange}
              value={description}
            />
            <button className="btn btn-outline-primary mt-1 btn-block">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
