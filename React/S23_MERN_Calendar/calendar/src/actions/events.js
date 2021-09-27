// 313, 314
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

export const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});

export const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event,
});

export const eventDeleted = () => ({ type: types.eventDeleted });
