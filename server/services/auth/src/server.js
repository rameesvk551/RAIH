import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // ✅ import cors

import routes from './routes/index.js';
import { dbConnect } from './config/db.js';
import { initRabbitMQ } from './utils/rabbitMq.js';

dotenv.config();
const PORT = 5001;

const app = express();

// ✅ CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL (React, etc.)
  credentials: true, // Allow cookies to be sent
}));

// DB connect
dbConnect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1', routes);

app.listen(PORT, async () => {
  await initRabbitMQ();
  console.log(`🚀 Auth Service running on http://localhost:${PORT}`);
});
