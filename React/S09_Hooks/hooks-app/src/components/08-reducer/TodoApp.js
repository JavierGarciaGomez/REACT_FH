// 125, 126, 127, 128
import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "../styles.css";
import { todoReducer } from "./todoReducer";

const init = () => {
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
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p
                  className="text-center"
                  onClick={() => handleComplete(todo.id)}
                >
                  {i + 1}, {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
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
