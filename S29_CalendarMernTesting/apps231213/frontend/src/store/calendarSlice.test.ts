import {
  calendarWithActiveEventState,
  calendarWithEventsState,
  events,
  initialCalendarState,
} from "./../../tests/fixtures/calendarStates";
import { describe, expect, test } from "vitest";
import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from ".";

describe("Pruebas en calendarSlice", () => {
  test("debe de regresar el estado por defecto", () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialCalendarState);
  });

  test("onSetActiveEvent debe de activar el evento", () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );

    expect(state.activeEvent).toEqual(events[0]);
  });

  test("onAddNewEvent debe de agregar el evento", () => {
    const newEvent = {
      id: "3",
      startDate: new Date("2020-10-21 13:00:00"),
      endDate: new Date("2020-10-21 15:00:00"),
      title: "Cumpleaños de Fernando!!",
      notes: "Alguna nota!!",
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );
    expect(state.events).toEqual([...events, newEvent]);
  });

  test("onUpdateEvent debe de actualizar el evento", () => {
    const updatedEvent = {
      id: "1",
      startDate: new Date("2020-10-21 13:00:00"),
      endDate: new Date("2020-10-21 15:00:00"),
      title: "Cumpleaños de Fernando actualizado",
      notes: "Alguna nota actualizada",
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updatedEvent)
    );
    expect(state.events).toContain(updatedEvent);
  });

  test("onDeleteEvent debe de borrar el evento activo", () => {
    // calendarWithActiveEventState
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDeleteEvent()
    );
    expect(state.activeEvent).toBe(undefined);
    expect(state.events).not.toContain(events[0]);
  });

  test("onLoadEvents debe de establecer los eventos", () => {
    // initialState
    const state = calendarSlice.reducer(
      initialCalendarState,
      onLoadEvents(events)
    );
    expect(state.isLoadingEvents).toBeFalsy();
    expect(state.events).toEqual(events);

    // const newState = calendarSlice.reducer(state, onLoadEvents(events));
    expect(state.events.length).toBe(events.length);
  });

  test("onLogoutCalendar debe de limpiar el estado", () => {
    // calendarWithActiveEventState
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onLogoutCalendar()
    );
    expect(state).toEqual(initialCalendarState);
  });
});
