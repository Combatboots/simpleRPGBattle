import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import battleRouter from './routes/battle.routes.js';

const app = express();

app.use(express.json(), cors());
app.use("/api", battleRouter)

dotenv.config();

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));