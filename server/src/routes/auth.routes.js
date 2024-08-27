import { Router } from "express";
import { loginUser, logoutUser, signupUser } from "../controller/auth.controller.js";

const router = Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);


export {
    router
}