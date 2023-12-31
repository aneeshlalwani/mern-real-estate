// const express = require('express');
import express  from "express";
import mongoose from "mongoose";
// importing router
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// connecting to mongoDB
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to DB...");
}).catch((err) => {
    console.log(err);
});

// listening the port
app.listen(3000, () => {
    console.log(`Server is running on port 3000...`);
});

// Using user router
app.use('/api/user', userRouter);

app.use('/api/auth', authRouter);

// creating a middleware for handling possible errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
