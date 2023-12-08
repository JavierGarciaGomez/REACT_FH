import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import { getCalendarEvents } from "../controller/calendearEvents";

const router = Router();

// getEvents
// createEvent
// updateEvent
// deleteEvent

router.get("/", getCalendarEvents);

export default router;
