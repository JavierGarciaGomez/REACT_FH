import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  res.json({ ok: true });
});

export default router;
