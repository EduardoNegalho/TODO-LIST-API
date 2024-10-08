import express from "express";
import { createTask } from "../controllers/todoController.js";

const router = express.Router();

router.post('/task', createTask);

export default router;