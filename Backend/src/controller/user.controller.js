const userModel = require("../model/user.model");
const { success, failed } = require("../helper/response");

const bcrypt = require("bcrypt");

const userController = {
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
};

module.exports = userController;
