# Task Management System

A comprehensive task management system with user authentication and CRUD operations for managing tasks. It includes features like JWT-based authentication, task creation, update, and deletion, along with proper input validation and error handling.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Registration:** Allows new users to sign up with their email and password.
- **User Login:** Secure login with JWT-based authentication.
- **Logout:** Users can log out, invalidating their JWT tokens.
- **Task Management:** Create, read, update, and delete tasks.
- **Input Validation:** Ensures data integrity for both user and task fields.
- **Error Handling:** Comprehensive error handling for all API routes.
- **API Documentation:** Accessible Swagger UI for easy API exploration.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL (using Sequelize ORM)
- **Authentication:** JSON Web Token (JWT)
- **Validation:** express-validator
- **API Documentation:** Swagger

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ramcodere/Task-Management-System
   cd task-management-system

Install dependencies:npm install
Start the server:npm run dev

Environment Variables
Create a .env file in the root directory and add the following environment variables:
PORT=3000
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret-key

API Endpoints
User Authentication Routes
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login with email and password.
POST /api/auth/logout: Logout and invalidate JWT.
Task Management Routes
POST /api/tasks: Create a new task.
GET /api/tasks: Retrieve a list of all tasks.
GET /api/tasks/:id: Retrieve details of a specific task.
PUT /api/tasks/:id: Update an existing task.

Usage
Register a new user: Make a POST request to /api/auth/register with the user's email and password.
Login: Make a POST request to /api/auth/login to receive a JWT token.
Authenticated Requests: Include the JWT token in the Authorization header as Bearer <token> to access protected routes.
Task Management: Use the provided routes to create, read, update, and delete tasks.
Error Handling
The API includes robust error handling to catch and respond to various error scenarios:

Validation Errors: Returns 400 status with detailed error messages.
Authentication Errors: Returns 401 status if the JWT token is missing or invalid.
Not Found Errors: Returns 404 status when resources are not found.
