// 313, 314, 315, 316
import { types } from "../types/types";

// 314
export const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

// 314
export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

// 315
export const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});

// 316
export const eventUpdated = (event) => {
  console.log("eventUpdated", event);

  return {
    type: types.eventUpdated,
    payload: event,
  };
};

export const eventDeleted = () => ({ type: types.eventDeleted });
