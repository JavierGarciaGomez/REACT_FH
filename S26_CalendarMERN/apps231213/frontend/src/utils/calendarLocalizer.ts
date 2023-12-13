import { dateFnsLocalizer } from "react-big-calendar";
import esEs from "date-fns/locale/es";
import enUS from "date-fns/locale/en-US";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  es: esEs,
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const calendarLocalizer = localizer;
