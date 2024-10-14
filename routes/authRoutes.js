const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController');

// Registration route with validation middleware
router.post(
    '/register',
    [
        check('email', 'Valid email is required').isEmail(),
        check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    register
);

// Login route
router.post(
    '/login',
    [
        check('email', 'Valid email is required').isEmail(),
        check('password', 'Password is required').notEmpty(),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    login
);

// Logout route
router.post('/logout', logout);

module.exports = router;
