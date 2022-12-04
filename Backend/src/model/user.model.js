const db = require("../config/db");

const userModel = {
	selectUserId: (id) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
			SELECT * FROM users WHERE id_user = ${id}`
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
		return new Promise((resolve, reject) => {
			db.query(
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
		const date = new Date();
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1;
		let dd = date.getDate();

		if (dd < 10) dd = "0" + dd;
		if (mm < 10) mm = "0" + mm;

		const time =
			date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

		const date_created = `${yyyy}/${mm}/${dd} - ${time}`;

		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO users (username, fullname, email, password, photo, level, date_created)
        VALUES
        ('${username}', '${username}',  '${email}', '${password}', '${photo}', 1, '${date_created}')`
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

	checkUsername: (username) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
        SELECT * FROM users WHERE username = '${username}'
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
			WHERE id_user = $11
			`,
				[
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
			UPDATE users SET photo = '${photo}' WHERE id_user = ${id}
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
			DELETE FROM users WHERE id_user = ${id}`
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
