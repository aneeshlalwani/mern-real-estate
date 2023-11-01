// const express = require('express');
import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
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