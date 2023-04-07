const express = require("express");
const { signup, login, changePassword } = require("../Controllers/authController");
const { fetchUser } = require("../Middlewares/fetchUser");

const authRouter = express.Router();

authRouter.post("/auth/signup",signup);
authRouter.post("/auth/signin",login);
authRouter.patch("/auth/changepass",fetchUser,changePassword)

module.exports = {authRouter}