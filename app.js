import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is running ');
});

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});