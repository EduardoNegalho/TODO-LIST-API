import { body } from "express-validator";

const validateTask = [
    body('title').notEmpty().withMessage('O título é obrigatório'),
    body('description').notEmpty().withMessage('A descrição é obrigatória'),
    body('status').notEmpty().withMessage('O status é obrigatório')
];

export default validateTask;