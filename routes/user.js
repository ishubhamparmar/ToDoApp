//Route splitting - MVC
import express from "express";
import { getMyProfile,  login,  logout,  register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//API To register a user
router.post("/new", register);
router.post("/login", login );
router.get("/logout", logout );

//API to get details of user when ID is dynamic (dynamic url)
router.get("/me",isAuthenticated, getMyProfile);

export default router;