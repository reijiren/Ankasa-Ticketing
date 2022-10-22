const express = require("express");
const uploadProfilePic = require("../middleware/uploadImg");

const { register, updateUser } = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.post("/register", register).put("/user/update", updateUser);

module.exports = userRouter;
