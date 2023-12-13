import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import UserModel from "../models/User";
import { RequestWithUid } from "../types/types";

export const validateJwt = async (
  req: RequestWithUid,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "Missing token" });
  }

  try {
    const { uid } = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY!
    ) as JwtPayload;

    const user = await UserModel.findById(uid);
    if (!user) {
      return res.status(401).json({ msg: "There is no user with that id" });
    }
    // // check if user is active
    // if (!user.active)
    //   return res.status(401).json({ msg: "The user is inactive" });

    req.user = user;

    next();
  } catch (error) {
    console.log({ error });
    res.status(401).json({ msg: "Invalid token" });
  }
};
