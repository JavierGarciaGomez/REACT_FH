// 320
import { types } from "../types/types";

export const eventSetActive = (id) => ({
  type: types.eventSetActive,
  payload: id,
});

export const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});

export const eventUpdate = (event) => ({
  type: types.eventUpdate,
  payload: event,
});

export const eventDelete = () => ({
  type: types.eventDelete,
});
