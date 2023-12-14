import testRouter from "./test";
import authRouter from "./auth";
import calendarEventsRouter from "./calendarEvents";

export const routers = {
  test: testRouter,
  auth: authRouter,
  calendarEvents: calendarEventsRouter,
};
