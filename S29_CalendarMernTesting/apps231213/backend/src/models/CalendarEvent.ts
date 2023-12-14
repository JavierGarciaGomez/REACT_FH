import mongoose, { Schema, model } from "mongoose";
import { ICalendarEvent, IUser } from "../types/types";

const CalendarEventSchema = new Schema<ICalendarEvent>({
  title: { type: String, required: true },
  notes: { type: String, required: false },
  startDate: { type: Date, default: Date.now, required: true },
  endDate: { type: Date, required: false },
  createdBy: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// calendarEventSchema.methods.toJSON = function () {
//   const { __v, password, _id, ...user } = this.toObject();
//   user.uid = _id;
//   return user;
// };

CalendarEventSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const CalendarEventModel = model<ICalendarEvent>(
  "CalendarEvent",
  CalendarEventSchema
);

export default CalendarEventModel;
