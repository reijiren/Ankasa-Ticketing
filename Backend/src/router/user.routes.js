const express = require("express");

const {
	getUserId,
	getAllUser,
	searchUser,
	register,
	login,
	updateUser,
	updatePhoto,
	deleteUser,
} = require("../controller/user.controller");
const { uploadProfilePic } = require("../middleware/uploadImg");
const { removeProfilePic } = require("../middleware/deleteImg");
const jwtAuth = require("../middleware/jwtAuth");
const { isAdmin } = require("../middleware/auth");

const userRouter = express.Router();

userRouter
	.get("/user/:id", getUserId)
	.get("/user", jwtAuth, isAdmin, getAllUser)
	.get("/search/:username", searchUser)
	.post("/register", register)
	.put("/user/update/:id", updateUser)
	.put(
		"/user/update/photo/:id",
		removeProfilePic,
		uploadProfilePic,
		updatePhoto
	)
	.delete("/user/:id", removeProfilePic, deleteUser)
	.post("/login", login);

module.exports = userRouter;