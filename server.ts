import 'dotenv/config'; // 1. Load env vars immediately
import express from 'express';
import authRoutes from './src/routes/authRoutes.js';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});