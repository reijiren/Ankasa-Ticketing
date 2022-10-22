const userModel = require("../model/user.model");
const { success, failed } = require("../helper/response");

const bcrypt = require("bcrypt");

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

				userModel.checkEmail(email).then((result) => {
					if (result.rowCount == 0) {
						userModel
							.register(data)
							.then((result) => {
								success(res, result, "success", "register success");
							})
							.catch((err) => {
								failed(res, err.message, "failed", "register failed");
							});
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
	updateUser: (req, res) => {
		const id = req.params.id;
		// const photo = req.file.filename;
		const {
			username,
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

		userModel
			.updateProfile(data)
			.then((result) => {
				res.json(result);
			})
			.catch((error) => {
				res.json(error);
			});
	},

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
};

module.exports = userController;
