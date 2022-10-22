const express = require("express");

const {
	getUserId,
	register,
	updateUser,
	updatePhoto,
	deleteUser,
} = require("../controller/user.controller");
const { uploadProfilePic } = require("../middleware/uploadImg");
const { removeProfilePic } = require("../middleware/deleteImg");

const userRouter = express.Router();

userRouter
	.get("/user/:id", getUserId)
	.post("/register", register)
	.put("/user/update/:id", updateUser)
	.put(
		"/user/update/photo/:id",
		removeProfilePic,
		uploadProfilePic,
		updatePhoto
	)
	.delete("/user/:id", removeProfilePic, deleteUser);

module.exports = userRouter;
