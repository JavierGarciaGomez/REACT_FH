import { types } from "../types/types";

// 244
export const setError = (err) => {
  console.log("estoy acá amiguitos");
  return {
    type: types.uiSetError,
    payload: err,
  };
};

export const removeError = () => ({
  type: types.uiRemoveError,
});
