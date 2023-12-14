import { useAppDispatch, useAppSelector } from ".";
import { calendarApi } from "../api";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendarSlice";
import { CalendarEvent } from "../types/types";

interface CalendarEventsApiResponse<T = undefined> {
  status: number;
  ok: boolean;
  message: string;
  data?: T; // This makes the data property optional for error responses
}

interface CalendarEventSuccessResponse {
  title: string;
  notes: string;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

interface GetCalendarEventsSuccessResponse
  extends Array<CalendarEventSuccessResponse> {}

export const useCalendarStore = () => {
  const dispatch = useAppDispatch();

  const { events, activeEvent } = useAppSelector(
    (state) => state.calendarReducer
  );
  const { user } = useAppSelector((state) => state.authReducer);

  // const findEvent = (id: string) => events.find((event) => event._id === id);
  const setActiveEvent = (event: CalendarEvent) => {
    dispatch(onSetActiveEvent(event));
  };

  const startSavingEvent = async (calendarEvent: CalendarEvent) => {
    if (calendarEvent.id) {
      const { data } = await calendarApi.put<
        CalendarEventsApiResponse<CalendarEventSuccessResponse>
      >(`/calendarEvents/${calendarEvent.id}`, calendarEvent);
      // Actualizando
      if (data && data.ok && data.data) {
        // Creando
        dispatch(onUpdateEvent(calendarEvent));
      }
    } else {
      const { data } = await calendarApi.post<
        CalendarEventsApiResponse<CalendarEventSuccessResponse>
      >("/calendarEvents", calendarEvent);

      if (data && data.ok && data.data) {
        const fetchedCalendarEvent = data.data;

        // Creando
        dispatch(
          onAddNewEvent({
            ...fetchedCalendarEvent,
            user: { _id: user!.uid, name: user!.name },
          })
        );
      }
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get<
        CalendarEventsApiResponse<GetCalendarEventsSuccessResponse>
      >("/calendarEvents");
      const fetchedCalendarEvents = data!.data!;

      const formattedEvents = fetchedCalendarEvents.map((calendarEvent) => {
        const startDate = new Date(calendarEvent.startDate);
        const endDate = new Date(calendarEvent.endDate);
        const currentUser = { _id: user!.uid, name: user!.name };

        return { ...calendarEvent, startDate, endDate, user: currentUser };
      });

      dispatch(onLoadEvents(formattedEvents));
    } catch (error) {
      console.log(error);
    }
  };

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/calendarEvents/${activeEvent!.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      console.log(error);
    }
  };

  return {
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents,
  };
};
