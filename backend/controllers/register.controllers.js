import asyncHandler from 'express-async-handler';
import { Register } from '../models/register.model.js'; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

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

// @user/login - Authenticate a user and issue a token
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await Register.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    fullname: user.fullname
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            fullname: user.fullname,
            contactnumber: user.contactnumber,
            token: accessToken, 
        });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
});





export const getUser = asyncHandler(async (req, res) => {
    const { _id } = req.body;

    if (!_id) {
        return res.status(400).json({ message: "UserID is required" });
    }
    const record = await Register.findOne({ _id });

    if (!record) {
        return res.status(404).json({ message: "No records found" });
    }
    const { username, email, fullname, contactnumber } = record;

    res.status(200).json({
        _id: record._id,
        username,
        email,
        fullname,
        contactnumber,
    });
});
