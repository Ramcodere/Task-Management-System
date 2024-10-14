const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Management API',
            version: '1.0.0',
            description: 'API documentation for the Task Management System',
        },
        servers: [
            { url: 'http://localhost:3000' },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };







