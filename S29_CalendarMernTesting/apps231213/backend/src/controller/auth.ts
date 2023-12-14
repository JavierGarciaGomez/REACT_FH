import { Request, Response } from "express";
import UserModel from "../models/User";
import { successResponse } from "../responses";
import { createHashedPassword, validatePassword } from "../utils/utils";
import { generateJwt } from "../utils/jwt";
import { RequestWithUid } from "../types/types";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User with provided email not found.",
      });
    }
    const isPasswordValid = await validatePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Incorrect password.",
      });
    }

    const token = await generateJwt(user.id, user.name);
    return successResponse(res, 200, "user authenticated", { token, user });
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const existentUser = await UserModel.find({ email });
    if (existentUser.length > 0) {
      throw new Error(`user with email ${email} already exists`);
    }
    const user = new UserModel({ name, email, password });
    user.password = await createHashedPassword(password);
    const createdUser = await user.save();
    const token = await generateJwt(user.id, user.name);
    const data = { user: createdUser, token };
    return successResponse(res, 201, "resource created", data);
  } catch (error: any) {
    console.log({ error });
    res.status(500).json({ error: error.message, msg: "Error creating user" });
  }
};

export const refreshToken = async (req: RequestWithUid, res: Response) => {
  const user = req.user;
  const token = await generateJwt(user!.id, user!.name);
  try {
    res.status(200).json({ ok: true, data: { user, token } });
  } catch (error: any) {
    console.log({ error });
    res.status(500).json({ error: error.message, msg: "Error" });
  }
};
