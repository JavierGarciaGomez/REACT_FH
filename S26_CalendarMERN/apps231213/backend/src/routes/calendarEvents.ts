import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt";
import {
  createCalendarEvent,
  deleteCalendarEvent,
  getCalendarEvent,
  getCalendarEvents,
  updateCalendarEvent,
} from "../controller/calendarEvents";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { isDate } from "../utils/FieldValidations";

const router = Router();

router.use(validateJwt);

router.get("/", getCalendarEvents);
router.post(
  "/",
  [
    check("title", "The title is required").not().isEmpty(),
    check("startDate", "The start date is required").custom(isDate),
    check("endDate", "The end date is required").custom(isDate),
    validateFields,
  ],
  createCalendarEvent
);
router.get("/:id", getCalendarEvent);
router.put("/:id", updateCalendarEvent);
router.delete("/:id", deleteCalendarEvent);

export default router;
