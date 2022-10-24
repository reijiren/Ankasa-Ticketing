const db = require("../config/db");

const userModel = {
	selectUserId: (id) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
			SELECT * FROM users WHERE id = ${id}`
			)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	getAllUser: () => {
		return new Promise((resolve, reject) => {
			db.query(
				`
			SELECT * FROM users
			`
			)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	searchUser: (username, limit, offset) => {
		// searchUser: (username) => {
		return new Promise((resolve, reject) => {
			db.query(
				// 	`
				// SELECT * FROM users WHERE username ILIKE '%${username}%'
				// `
				`
				SELECT * FROM users WHERE username ILIKE '%${username}%' LIMIT ${limit} OFFSET ${offset}
				`
			)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	register: ({ username, email, password, photo }) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO users (username, email, password, photo, level)
        VALUES
        ('${username}', '${email}', '${password}', '${photo}')`
			)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	checkEmail: (email) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
        SELECT * FROM users WHERE email = '${email}'
        `
			)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	updateProfile: ({
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
		id,
	}) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
			UPDATE users SET
			username = COALESCE ($1, username),
			email = COALESCE ($2, email),
			credit_card = COALESCE ($3, credit_card),
			phone = COALESCE ($4, phone),
			city = COALESCE ($5, city),
			address = COALESCE ($6, address),
			post_code = COALESCE ($7, post_code),
			level = COALESCE ($8, level),
			balance = COALESCE ($9, balance),
			gender = COALESCE ($10, gender)
			WHERE id = $11
			`,
				[
					username,
					email,
					// password,
					credit_card,
					phone,
					city,
					address,
					post_code,
					level,
					// photo,
					balance,
					gender,
					id,
				],
				(err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res);
					}
				}
			);
		});
	},

	forgotUserPassword: ({ email, password }) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
			UPDATE users SET password = '${password}' WHERE email = '${email}'
			`
			)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	updatePhoto: (id, photo) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
			UPDATE users SET photo = '${photo}' WHERE id = ${id}
			`
			)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},

	deleteUser: (id) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
			DELETE FROM users WHERE id = ${id}`
			)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	},
};

module.exports = userModel;
