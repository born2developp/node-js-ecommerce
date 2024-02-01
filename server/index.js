import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import admin from './routes/admin.js';
import auth from './routes/auth.js';

// initalizing express
const app = express();

// dotenv configuration
dotenv.config();

// enable the server for visted from browser
app.listen(process.env.PORT , () => {
    console.log('server is working...');
});

// mongodb connection 
mongoose.connect(process.env.MONGO_URL , (err) => {
    if(err) return console.error(err);
    console.log('mongodb connected successfully');
});

// middlewares
app.use(cors());
app.use(express.json());

// Route Middlewares
app.use('/api/admin' , admin);
app.use('/api/auth' , auth);

