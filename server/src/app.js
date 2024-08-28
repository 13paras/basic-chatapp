import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
import { router as authRouter } from "./routes/auth.routes.js";
import { router as messageRouter } from "./routes/message.routes.js";
import { router as userRouter } from "./routes/user.routes.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/users", userRouter);

export { app };
