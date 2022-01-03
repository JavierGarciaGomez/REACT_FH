// 320, 378
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const eventSetActive = (id) => ({
  type: types.eventSetActive,
  payload: id,
});

// 378
export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
    try {
      const { uid, name } = getState().auth;

      const resp = await fetchConToken("events", event, "POST");
      const body = await resp.json();

      if (body.ok) {
        event.id = body.evento.id;

        event.user = { _id: uid, name };

        dispatch(eventAddNew(event));
      }
    } catch (error) {
      Swal.fire("error", "error", "error");
    }
  };
};

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});

// 381
export const eventStartUpdate = (event) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`events/${event.id}`, event, "PUT");
      const body = await resp.json();

      if (body.ok) {
        dispatch(eventUpdate(event));
      } else {
        Swal.fire("error", body.msg, "error");
      }
    } catch (error) {
      Swal.fire("error", "error", "error");
    }
  };
};

const eventUpdate = (event) => ({
  type: types.eventUpdate,
  payload: event,
});

// 382
export const eventStartDelete = () => {
  return async (dispatch, getState) => {
    try {
      const { activeEvent } = getState().calendar;
      const resp = await fetchConToken(
        `events/${activeEvent.id}`,
        {},
        "DELETE"
      );
      const body = await resp.json();

      if (body.ok) {
        dispatch(eventDelete());
      } else {
        Swal.fire("error", body.msg, "error");
      }
    } catch (error) {
      Swal.fire("error", "error", "error");
    }
  };
};

export const eventDelete = () => ({
  type: types.eventDelete,
});

export const eventsStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("events");
      const body = await resp.json();

      if (body.ok) {
        const transformedEvents = prepareEvents(body.eventos);
        dispatch(eventLoaded(transformedEvents));
        // event.id = body.evento.id;
        // event.user = { _id: uid, name };
        // dispatch(eventAddNew(event));
      }
    } catch (error) {
      Swal.fire("error", "error", "error");
    }
  };
};

const eventLoaded = (events) => ({
  type: types.eventsLoaded,
  payload: events,
});

// 382

export const eventLogout = () => ({ type: types.eventLogout });
