# Task Management System

A comprehensive task management system with user authentication and CRUD operations for managing tasks. It includes features like JWT-based authentication, task creation, update, and deletion, along with proper input validation and error handling.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

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

   git clone https://github.com/Ramcodere/Task-Management-System
   cd task-management-system

## Installation

### 1. Install Dependencies

npm install

API Endpoints
User Authentication Routes
POST /api/auth/register - Register a new user.
POST /api/auth/login - Login with email and password.
POST /api/auth/logout - Logout and invalidate JWT.
Task Management Routes
POST /api/tasks - Create a new task.
GET /api/tasks - Retrieve a list of all tasks.
GET /api/tasks/:id - Retrieve details of a specific task.
PUT /api/tasks/:id - Update an existing task.
DELETE /api/tasks/:id - Delete a task

## Installation

### 1. Install Dependencies
npm install
2. Start the Server
npm run dev
Environment Variables
Create a .env file in the root directory and add the following environment variables:
PORT=3000
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret-key
API Endpoints
User Authentication Routes
POST /api/auth/register - Register a new user.
POST /api/auth/login - Login with email and password.
POST /api/auth/logout - Logout and invalidate JWT.
Task Management Routes
POST /api/tasks - Create a new task.
GET /api/tasks - Retrieve a list of all tasks.
GET /api/tasks/:id - Retrieve details of a specific task.
PUT /api/tasks/:id - Update an existing task.
DELETE /api/tasks/:id - Delete a task.

Usage
1. Register a New User
Make a POST request to /api/auth/register with the user's email and password.
2. Login
Make a POST request to /api/auth/login to receive a JWT token.
3. Authenticated Requests
Include the JWT token in the Authorization header as Bearer <token> to access protected routes.
4. Task Management
Use the provided routes to create, read, update, and delete tasks.

Error Handling
The API includes robust error handling to catch and respond to various error scenarios.


