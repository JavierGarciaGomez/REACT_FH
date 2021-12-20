// ..., 77
import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputValue = (ev) => {
    console.log('handleInputChange llamado')
    setinputValue(ev.target.value);
  };

  // ..., 77
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle Submit', inputValue);
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setinputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputValue}></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
