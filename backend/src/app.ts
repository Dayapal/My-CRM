import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";
import { errorHandler } from "./middleware/error.middleware.js";
import path
from "path";


const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

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

app.use(

  "/uploads",

  express.static(

    path.join(
      process.cwd(),
      "uploads"
    )

  )

);
// Always last
app.use(errorHandler);

export default app;