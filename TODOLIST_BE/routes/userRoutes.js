import { Router } from "express";
import userController from "../controllers/userController.js";

const router = new Router();

router
  .get("/", userController.getUser)
  .post("/", userController.createUser)
  .post("/login", userController.login)
  .put("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

export default router;
