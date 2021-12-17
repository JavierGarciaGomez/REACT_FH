// 236, 237, 249

import { types } from "../types/types";

/*
Funcionamiento:
    state vacío cuando no esté autenticado: {}
    state cuando esté auténticado: {
        uid: jsajjajsajsajsja,
        nombre: 'Juan Perez'

    }
*/

// const initialState = {
//   uid: 1234,
//   name: "JGG",
//   address: { Street: "a" },
// };

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return { uid: action.payload.uid, name: action.payload.displayName };

    case types.logout:
      return {};

    default:
      return state;
  }
};
