import express  from "express";
// const express = require('express');
const app = express();

// listening the port
app.listen(3000, () => {
    console.log(`Server is running on port 3000...`);
});