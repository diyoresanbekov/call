import { Router } from "express";
import rateLimit from "express-rate-limit";
import { submitApplication } from "../controllers/application.controller.js";

const router = Router();

const applicationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Juda ko'p so'rov. Iltimos, keyinroq urinib ko'ring.",
  },
});

router.post("/", applicationLimiter, submitApplication);

export default router;
