// ..., 77
import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ addCatHandler }) => {
  const [inputValue, setinputValue] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 2) return;
    addCatHandler(inputValue);
    setinputValue("");
  };

  const changeHandler = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Add Category</h2>
      <input type="text" onChange={changeHandler} value={inputValue} />
      <button type="submit">Agregar</button>
    </form>
  );
};

AddCategory.propTypes = {
  addCatHandler: PropTypes.func.isRequired,
};
