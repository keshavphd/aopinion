import { Router } from "express";
import userController from "../controller/userController.js";
import auth from "./auth.js";
const router = Router();
router.route("/create-user").post(userController.createUser);
router.route("/login-user").post(userController.loginUser);
router.route("/get-user").get(auth,userController.userDetail);
router.route("/update-password").put(auth,userController.updateUser);
export default router;
