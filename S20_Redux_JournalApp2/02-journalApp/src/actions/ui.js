// ..., 244, 249, 255 startloading and finishloading

import { types } from "../types/types";

// 244
export const setError = (err) => {
  return {
    type: types.uiSetError,
    payload: err,
  };
};

export const removeError = () => ({
  type: types.uiRemoveError,
});

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});
