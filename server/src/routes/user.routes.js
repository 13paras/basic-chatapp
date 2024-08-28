import { Router } from "express";
import protectedRoute from "../middlewares/protectedRoutes.js";
import { getUsersForSideBar } from "../controller/user.controller.js";

const router = Router();

router.get("/", protectedRoute, getUsersForSideBar);

export { router };
