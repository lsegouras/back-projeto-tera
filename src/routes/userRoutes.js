import express from "express";
const router = express.Router();

import controller from "../controllers/userControllers.js";
import authController from "../controllers/authControllers.js";

router.get("/all", authController.checkToken, controller.getAll);
router.get("/by-name", controller.getByNameOrNickname);
router.get("/:id", controller.getUserById);
router.post("/", controller.createUser);
router.post("/login", authController.login);
router.patch("/:id", controller.updateUserById);
router.delete("/:id", controller.deleteUserById);

export default router;
