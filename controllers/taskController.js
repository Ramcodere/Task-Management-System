
const Task = require('../models/taskModel');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const task = await Task.create({ title, description, status, priority, user_id: req.user.userId });
        res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { user_id: req.user.userId } });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

// Get task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ where: { id: req.params.id, user_id: req.user.userId } });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error });
    }
};

// Update an existing task
exports.updateTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const task = await Task.findOne({ where: { id: req.params.id, user_id: req.user.userId } });
        if (!task) return res.status(404).json({ message: 'Task not found' });

        task.title = title;
        task.description = description;
        task.status = status;
        task.priority = priority;
        await task.save();

        res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({ where: { id: req.params.id, user_id: req.user.userId } });
        if (!task) return res.status(404).json({ message: 'Task not found' });

        await task.destroy();
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};
