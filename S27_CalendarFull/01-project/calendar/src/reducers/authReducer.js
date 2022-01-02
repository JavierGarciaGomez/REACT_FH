// 359, 361, 366

import { types } from "../types/types";

const initialState = {
  checking: true,
  // uuid: null,
  // name: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // 361
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };

    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

    case types.authLogout:
      return {
        checking: false,
      };

    default:
      return state;
  }
};
