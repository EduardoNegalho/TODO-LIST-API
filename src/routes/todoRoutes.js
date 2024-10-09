import express from "express";
import { createTask, updateTask, getTasks, deleteTask } from "../controllers/todoController.js";
import validateTask from "../utils/taskValidation.js";

const router = express.Router();

router.post('/task', validateTask, createTask);
router.put('/task/:id', validateTask, updateTask);
router.get('/task/', getTasks);
router.delete('/task/:id', deleteTask);

export default router;