import React from "react";

export const TodoList = ({ todos, handleDelete, handleComplete }) => {
  return (
    <div className="col-7">
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <li key={todo.id} className="list-group-item">
            <p
              className={`text-center ${todo.done && "completed"}`}
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
  );
};
