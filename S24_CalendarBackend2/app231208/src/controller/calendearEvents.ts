import { Request, Response } from "express";
import UserModel from "../models/User";
import { successResponse } from "../responses";
import { createHashedPassword, validatePassword } from "../utils/utils";
import { generateJwt } from "../utils/jwt";
import { RequestWithUid } from "../types/types";

export const getCalendarEvents = async (req: Request, res: Response) => {
  try {
    console.log("here");
    return successResponse(res, 200, "getCalendarEvents");
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};
