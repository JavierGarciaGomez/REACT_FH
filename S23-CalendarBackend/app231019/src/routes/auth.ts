import { Router } from "express";
import { loginUser, refreshToken, registerUser } from "../controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields";

export const router = Router();

router.post(
  "/login",
  [
    check("email", "email is required").not().isEmpty(),
    check("password", "password is required").not().isEmpty(),
    validateFields,
  ],
  loginUser
);

router.post(
  "/register",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "email is required").not().isEmpty(),
    check("password", "password is required").not().isEmpty(),
    validateFields,
  ],
  registerUser
);

router.post("/refresh", refreshToken);

export default router;
