// 245, 247

import { types } from "../types/types";

// 245
export const login = (uid, displayName) => {
  console.log("here login");
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

// 247 acción asíncrona
export const startLoginEmailPassword = (email, password) => {
  // the dispatch comes from thunk
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Pedro"));
    }, 4000);
  };
};
