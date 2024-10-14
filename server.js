const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { swaggerDocs, swaggerUi } = require('./swagger/swaggerConfig');
const errorMiddleware = require('./middleware/errorMiddleware'); // Error handling middleware

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Middleware
app.use(express.json());

// Routes setup
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Global error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

