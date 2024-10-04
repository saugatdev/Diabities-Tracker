import asyncHandler from 'express-async-handler';
import { Register } from '../models/register.model.js'; 
import bcrypt from "bcrypt";

// @user/register
export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, fullname, contactnumber, password } = req.body;

    // Check for required fields
    if (!username || !email || !fullname || !contactnumber || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await Register.create({
        username,
        email,
        fullname,
        contactnumber,
        password: hashedPassword 
    });

    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            fullname: newUser.fullname,
            contactnumber: newUser.contactnumber,
        });
    } else {
        res.status(400).json({ message: "Invalid user data" });
    }
});


