

const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new task with validation middleware
router.post(
    '/',
    authMiddleware,
    [
        check('title', 'Title is required').notEmpty(),
        check('status', 'Invalid status').isIn(['pending', 'in-progress', 'completed']),
        check('priority', 'Invalid priority').isIn(['low', 'medium', 'high']),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    createTask
);

// Retrieve all tasks
router.get('/', authMiddleware, getTasks);

// Retrieve a specific task by ID
router.get('/:id', authMiddleware, getTaskById);

// Update a task with validation middleware
router.put(
    '/:id',
    authMiddleware,
    [
        check('title', 'Title is required').optional().notEmpty(),
        check('status', 'Invalid status').optional().isIn(['pending', 'in-progress', 'completed']),
        check('priority', 'Invalid priority').optional().isIn(['low', 'medium', 'high']),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    updateTask
);

// Delete a task
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;


