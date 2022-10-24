const userModel = require("../model/user.model");
const { success, failed, successWithToken } = require("../helper/response");

const bcrypt = require("bcrypt");
const jwtToken = require("../helper/generateJWT");

const userController = {
	getUserId: (req, res) => {
		const id = req.params.id;
		userModel
			.selectUserId(id)
			.then((result) => {
				success(res, result.rows, "success", "get user success");
			})
			.catch((err) => {
				failed(res, err.message, "failed", "get user failed");
			});
	},

	getAllUser: (req, res) => {
		userModel
			.getAllUser()
			.then((result) => {
				success(res, result.rows, "success", "get all user success");
			})
			.catch((err) => {
				failed(res, err.message, "failed", "get all user failed");
			});
	},

	searchUser: (req, res) => {
		const limit = parseInt(req.query.limit) || 2;
		const page = parseInt(req.query.page) || 1;
		const offset = (page - 1) * limit;
		const username = req.params.username;

		userModel
			.searchUser(username, limit, offset)
			// .searchUser(username)
			.then((result) => {
				success(res, result.rows, "success", "get user success");
			})
			.catch((err) => {
				failed(res, err.message, "failed", "get user failed");
			});
	},

	register: (req, res) => {
		try {
			const { username, email, password } = req.body;
			bcrypt.hash(password, 10, (err, hash) => {
				if (err) {
					failed(res, err.message, "failed", "failed hash password");
				}

				const data = {
					username,
					email,
					password: hash,
					photo: req.file ? req.file.filename : "default.png",
				};

				userModel.checkEmail(email)
				.then((result) => {
					if (result.rowCount == 0) {
						userModel.checkUsername(username)
						.then((result) => {
							if (result.rowCount == 0) {
								userModel.register(data)
								.then((result) => {
									success(res, result, "success", "register success");
								})
								.catch((err) => {
									failed(res, err.message, "failed", "register failed");
								});
							}else{
								failed(res, null, "failed", "username has been taken");
							}
						})
					}

					if (result.rowCount > 0) {
						failed(res, null, "failed", "email has been registered");
					}
				});
			});
		} catch (err) {
			failed(res, err.message, "failed", "internal server error");
		}
	},

	login: (req, res) => {
		const { email, password } = req.body;

		userModel
			.checkEmail(email)
			.then((result) => {
				const user = result.rows[0];
				if (result.rowCount > 0) {
					
					bcrypt
						.compare(password, result.rows[0].password)
						.then(async (result) => {
							if (result) {
								const token = await jwtToken({
									email: user.email,
									level: user.level,
								});
								delete user.password;
								delete user.credit_card;
								successWithToken(
									res,
									{ token, data: user },
									"success",
									"login success"
								);
							} else {
								failed(res, null, "failed", "username or password incorrect");
							}
						});
				} else {
					failed(res, null, "failed", "username or password incorrect");
				}
			})
			.catch((error) => {
				failed(res, err.message, "failed", "internal server error");
			});
	},

	updateUser: (req, res) => {
		const id = req.params.id;
		// const photo = req.file.filename;
		const {
			username,
			fullname,
			email,
			credit_card,
			phone,
			city,
			address,
			post_code,
			level,
			balance,
			gender,
		} = req.body;

		const data = {
			id,
			username,
			fullname,
			email,
			credit_card,
			phone,
			city,
			address,
			post_code,
			level,
			// photo,
			balance,
			gender,
		};

		userModel.checkEmail(data.email)
		.then((result) => {
			if (result.rowCount == 0) {
				userModel.checkUsername(username)
				.then((result) => {
					if (result.rowCount == 0) {
						userModel.updateProfile(data)
						.then((result) => {
							res.json(result);
						})
						.catch((error) => {
							res.json(error);
						});
					}else{
						failed(res, null, "failed", "username has been taken");
					}
				})
			}
			if (result.rowCount > 0) {
				failed(res, null, "failed", "email has been taken");
			}
		});
		
	},

	updateUserPassword: (req, res) => {
		const { email, password } = req.body;
		bcrypt.hash(password, 10, (err, hash) => {
			if (err) {
				failed(res, err.message, "failer", "failed hash password");
			}

			const data = {
				email,
				password: hash,
			};

			userModel.checkEmail(email).then((result) => {
				if (result.rowCount == 1) {
					userModel
						.forgotUserPassword(data)
						.then((result) => {
							success(res, result, "success", "update password success");
						})
						.catch((err) => {
							failed(res, err.message, "failed", "update password failed");
						});
				}

				if (result.rowCount == 0) {
					failed(res, null, "failed", "email is not registered");
				}
			});
		});
	},

	// forgotUserPassword: (req, res) => {
	// 	const { email, password } = req.body;
	// 	bcrypt.hash(password, 10, (err, hash) => {
	// 		if (err) {
	// 			failed(res, err.message, "failer", "failed hash password");
	// 		}

	// 		const data = {
	// 			email,
	// 			password: hash,
	// 		};

	// 		userModel
	// 			.forgotUserPassword(data)
	// 			.then((result) => {
	// 				success(res, result, "success", "update password success");
	// 			})
	// 			.catch((err) => {
	// 				failed(res, err.message, "failed", "update password failed");
	// 			});
	// 	});
	// },

	updatePhoto: (req, res) => {
		const id = req.params.id;
		const photo = req.file.filename;
		userModel
			.updatePhoto(id, photo)
			.then((result) => {
				res.json(result);
			})
			.catch((error) => {
				res.json(error);
			});
	},

	deleteUser: (req, res) => {
		const id = req.params.id;

		userModel
			.deleteUser(id)
			.then((result) => {
				res.json(result);
			})
			.catch((error) => {
				res.json(error);
			});
	},
};

module.exports = userController;
