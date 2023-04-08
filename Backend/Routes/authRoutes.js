const express = require("express");
const { signup, login, changePassword } = require("../Controllers/authController");
const { fetchUser } = require("../Middlewares/fetchUser");

const authRouter = express.Router();
const { body, validationResult } = require('express-validator');

authRouter.post("/auth/signup", body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }), signup);
authRouter.post("/auth/signin", body('email').isEmail(),body('password').isLength({ min: 5 }), login);
authRouter.post("/auth/changepass", fetchUser, body('old_password').isLength({ min: 5 }), changePassword);

module.exports = { authRouter }