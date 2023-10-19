import { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    res.status(201).json({ ok: true, email, password });
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    res.status(200).json({ ok: true, email, password, name });
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error, msg: "Error" });
  }
};
