import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validateFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req).array();
  console.log({ errors });

  if (errors.length) {
    return res.status(400).json({
      message: "Something went wrong",
      errorCode: "errorCode",
      errorType: "express-validator error",
      errors,
    });
  }
  next();
};
