import { Request, Response } from "express";
import { successResponse } from "../responses";
import CalendarEventModel from "../models/CalendarEvent";
import { RequestWithUid } from "../types/types";

export const getCalendarEvents = async (req: Request, res: Response) => {
  try {
    const calendarEvents = await CalendarEventModel.find().populate(
      "createdBy",
      "name"
    );
    return successResponse(res, 200, "getCalendarEvents", calendarEvents);
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};

export const createCalendarEvent = async (
  req: RequestWithUid,
  res: Response
) => {
  try {
    const { title, startDate, endDate, notes } = req.body;
    const user = req.user;
    const newCalendarEvent = new CalendarEventModel({
      title,
      startDate,
      endDate,
      notes,
      createdBy: user?.id,
    });

    const createdCalendarEvent = await newCalendarEvent.save();

    return successResponse(
      res,
      200,
      "createCalendarEvent",
      createdCalendarEvent
    );
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};

export const getCalendarEvent = async (req: Request, res: Response) => {
  try {
    const calendarEventId = req.params.id;
    const foundCalendarEvent = await CalendarEventModel.findById(
      calendarEventId
    ).populate("createdBy", "name");

    return successResponse(res, 200, "getCalendarEvent", foundCalendarEvent);
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};

export const updateCalendarEvent = async (
  req: RequestWithUid,
  res: Response
) => {
  try {
    const calendarEventId = req.params.id;
    const userId = req.user?.id;
    const foundCalendarEvent = await CalendarEventModel.findById(
      calendarEventId
    );
    if (!foundCalendarEvent) {
      throw new Error("Not found event");
    }

    if (foundCalendarEvent.createdBy.toString() !== userId) {
      throw new Error("Not enough privileges");
    }

    const newCalendarEvent = {
      ...req.body,
      updatedBy: userId,
    };

    const updatedEvent = await CalendarEventModel.findByIdAndUpdate(
      calendarEventId,
      newCalendarEvent,
      { new: true }
    );
    return successResponse(res, 200, "updateCalendarEvent", updatedEvent);
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};

export const deleteCalendarEvent = async (
  req: RequestWithUid,
  res: Response
) => {
  try {
    const calendarEventId = req.params.id;
    const userId = req.user?.id;
    const foundCalendarEvent = await CalendarEventModel.findById(
      calendarEventId
    );

    if (!foundCalendarEvent) {
      return res.status(404).json({
        ok: false,
        msg: "Not existent event",
      });
    }
    console.log({ foundCalendarEvent, userId });
    if (foundCalendarEvent.createdBy.toString() !== userId) {
      return res.status(401).json({
        ok: false,
        msg: "You don't have privileges",
      });
    }
    await CalendarEventModel.findByIdAndDelete(calendarEventId);
    return successResponse(res, 200, "deleteCalendarEvent", {
      id: calendarEventId,
    });
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};
