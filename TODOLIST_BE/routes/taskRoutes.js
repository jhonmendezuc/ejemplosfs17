import { Router } from "express";
import taskController from "../controllers/taskController.js";
import validateToken from "../midleware/verifyToken.js";
const router = new Router();

router.use(validateToken.validateToken);
router
  .get("/", taskController.getTask)
  .post("/", taskController.createTask)
  .put("/:id", taskController.updateTask)
  .delete("/:id", taskController.deleteTask);

export default router;
