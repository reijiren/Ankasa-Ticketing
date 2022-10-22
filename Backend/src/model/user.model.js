const db = require("../config/db");

const userModel = {
	register: ({ username, email, password }) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO users (username, email, password)
        VALUES
        ('${username}', '${email}', '${password}')`
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
};

module.exports = userModel;
