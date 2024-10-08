import prisma from "../config/database.js";
import { validationResult } from 'express-validator';

export const createTask = async (req, res) => {
    // valida dados
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }

    const { title, description, status } = req.body;
    // valida se há campos vazios
    if (!title || !description || !status) {
        return res.status(400).json({ erro: "Todos os campos devem ser preeenchidos." });
    }

    try {
        // cria tarefa
        await prisma.task.create({
            data: {
                title: title,
                description: description,
                status: status
            }
        })

        return res.status(201).json({ message: "Tarefa criada com sucesso." });
    } catch (error) {
        console.error(`Erro ao criar tarefa: ${error.message}`);
        return res.status(500).json({ erro: "Erro interno no servidor." });
    }
}