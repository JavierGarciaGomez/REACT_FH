// 313, 314, 315, 316, 371, 372
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";
import Swal from "sweetalert2";

// 371
export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchConToken("events", event, "POST");
      const body = await resp.json();

      console.log(body);

      if (body.ok) {
        event.id = body.evento.id;
        event.user = {
          _id: uid,
          name: name,
        };
        console.log(event);
        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

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

// 374

export const eventStartUpdate = (event) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`events/${event.id}`, event, "PUT");
      const body = await resp.json();

      if (body.ok) {
        dispatch(eventUpdated(event));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// 316
const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event,
});

// 375

export const eventStartDelete = () => {
  return async (dispatch, getState) => {
    const { id } = getState().calendar.activeEvent;
    try {
      const resp = await fetchConToken(`events/${id}`, {}, "DELETE");
      const body = await resp.json();

      if (body.ok) {
        dispatch(eventDeleted());
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const eventDeleted = () => ({ type: types.eventDeleted });

// 372

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("events");
      const body = await resp.json();

      const events = prepareEvents(body.eventos);
      dispatch(eventLoaded(events));
    } catch (error) {
      console.log(error);
    }
  };
};

// 372
const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events,
});

export const eventLogout = () => ({ type: types.eventLogout });
