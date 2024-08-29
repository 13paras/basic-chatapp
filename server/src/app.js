import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import NodeCache from "node-cache";

const myCache = new NodeCache({ stdTTL: 400, checkperiod: 220 });

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// routes
import { router as authRouter } from "./routes/auth.routes.js";
import { router as messageRouter } from "./routes/message.routes.js";
import { router as userRouter } from "./routes/user.routes.js";
import { app } from "./socket/socket.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/users", userRouter);

export { app, myCache };
