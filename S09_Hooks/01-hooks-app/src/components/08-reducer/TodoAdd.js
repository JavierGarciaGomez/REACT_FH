// 132
import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  //   128
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  //     132
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length < 2) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
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
  );
};
