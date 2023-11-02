import mongoose from "mongoose";

// Creating a user Schema
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true});

// Creating a user model
const User = new mongoose.model('User', userSchema);

export default User;