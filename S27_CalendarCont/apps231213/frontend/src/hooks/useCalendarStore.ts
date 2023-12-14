import { useAppDispatch, useAppSelector } from ".";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendarSlice";
import { CalendarEvent } from "../types/types";

export const useCalendarStore = () => {
  const dispatch = useAppDispatch();

  const { events, activeEvent } = useAppSelector(
    (state) => state.calendarReducer
  );

  // const findEvent = (id: string) => events.find((event) => event._id === id);
  const setActiveEvent = (event: CalendarEvent) => {
    dispatch(onSetActiveEvent(event));
  };

  const startSavingEvent = async (calendarEvent: CalendarEvent) => {
    // TODO: llegar al backend

    if (calendarEvent._id) {
      // Actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // Creando
      dispatch(
        onAddNewEvent({
          ...calendarEvent,
          _id: new Date().getTime().toString(),
        })
      );
    }
  };

  const startDeletingEvent = () => {
    // Todo: Llegar al backend

    dispatch(onDeleteEvent());
  };

  return {
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
