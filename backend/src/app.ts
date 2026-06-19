import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api", routes);

app.get("/api/health", (_, res) => {
  res.json({
    success: true,
    message: "CRM API Running",
  });
});

// Always last
app.use(errorHandler);

export default app;