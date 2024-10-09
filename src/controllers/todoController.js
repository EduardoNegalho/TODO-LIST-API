import prisma from "../config/database.js";
import { validationResult } from 'express-validator';

export const createTask = async (req, res) => {
    // valida dados de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }

    const { title, description, status } = req.body;

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
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

export const updateTask = async (req, res) => {
    // valida dados de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }

    const { id } = req.params;
    const { title, description, status } = req.body;

    try {
        // verifica se tarefa existe
        const task = await prisma.task.findUnique({
            where: { id: id }
        });
        if (!task) { return res.status(404).json({ error: "Tarefa não encontrada." }) }

        // atualiza tarefa
        await prisma.task.update({
            where: {
                id: id
            },
            data: {
                title: title,
                description: description,
                status: status
            }
        })

        return res.status(200).json({ message: "Tarefa atualizada com sucesso." });

    } catch (error) {
        console.error(`Error ao tentar atualizar a tarefa: ${error.message}`);
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

export const getTasks = async (req, res) => {
    const query = {};

    if (req.query.title) { query.title = req.query.title; }
    if (req.query.description) { query.description = req.query.description; }
    if (req.query.status) { query.status = req.query.status; }

    try {
        const tasks = await prisma.task.findMany({
            where: query,
            select: {
                title: true,
                description: true,
                status: true
            }
        });

        if (tasks.length === 0) {
            return res.status(404).json({ message: "Nenhuma tarefa encontrada" });
        }

        return res.status(200).json(tasks);
    } catch (error) {
        console.error(`Erro ao tentar buscar as tarefas: ${error.message}`);
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        // verifica se tarefa existe
        const task = await prisma.task.findUnique({
            where: { id: id }
        });
        if (!task) { return res.status(404).json({ error: "Tarefa não encontrada." }) }

        // exclui tarefa do banco de dados
        await prisma.task.delete({
            where: {
                id: id
            }
        })

        return res.status(200).json({ message: "Tarefa excluída com sucesso." });
    } catch (error) {
        console.error(`Erro ao tentar excluir a tarefa: ${error.message}`);
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}