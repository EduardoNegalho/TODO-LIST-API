import express from "express";
import { createTask } from "../controllers/todoController.js";
import validateTask from "../utils/taskValidation.js";

const router = express.Router();

router.post('/task', validateTask, createTask);

export default router;