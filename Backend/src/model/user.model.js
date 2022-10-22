const db = require("../config/db");

const userModel = {
	register: ({ username, email, password, photo }) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO users (username, email, password, photo)
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
        `,
				(err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res);
				}
			);
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
		photo,
		balance,
		gender,
		id_user,
	}) => {
		return new Promise((resolve, reject) => {
			db.query(`
			UPDATE users SET
			username = COALESCE ($1, username),
			email = COALESCE ($2, email),
			credit_card = COALESCE ($3, credit_card),
			phone = COALESCE ($4, phone),
			city = COALESCE ($5, city),
			address = COALESCE ($6, address),
			post_code = COALESCE ($7, post_code),
			level = COALESCE ($8, level),
			photo = COALESCE ($9, photo),
			balance = COALESCE ($10, balance),
			gender = COALESCE ($11, gender)
			WHERE id_user = $12
			`),
				[
					username,
					email,
					credit_card,
					phone,
					city,
					address,
					post_code,
					level,
					photo,
					balance,
					gender,
					id_user,
				],
				(err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res);
					}
				};
		});
	},
};

module.exports = userModel;
