// ..., 128

import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };
  console.log("printing for useForm", values);
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
    console.log("printing for useForm", values);
  };
  return [values, handleInputChange, reset];
};
