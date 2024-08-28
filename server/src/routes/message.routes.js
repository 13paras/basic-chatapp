import { Router } from "express";
import { getMessages, sendMessage } from "../controller/message.controller.js";
import protectedRoute from "../middlewares/protectedRoutes.js";

const router = Router();

router.get("/:id", protectedRoute, getMessages);
router.post("/send/:id", protectedRoute, sendMessage);

export { router };
