import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import applicationRoutes from "./routes/application.routes.js";
import { errorHandler, notFoundHandler } from "./middleware/error.middleware.js";

const app = express();

app.set("trust proxy", 1);

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.NODE_ENV !== "production" ? "http://localhost:3000" : null,
].filter(Boolean);

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(null, false);
    },
  })
);

app.use(express.json({ limit: "32kb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

app.use("/api/applications", applicationRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
