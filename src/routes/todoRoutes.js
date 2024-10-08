import express from "express";
import { createTask, updateTask } from "../controllers/todoController.js";
import validateTask from "../utils/taskValidation.js";

const router = express.Router();

router.post('/task', validateTask, createTask);
router.put('/task/:id', validateTask, updateTask);

export default router;