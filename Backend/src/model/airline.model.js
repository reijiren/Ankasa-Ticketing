const db = require("../config/db");

const airlineModel = {
	// get airline list
	getAllAirline: () => {
		return new Promise((resolve, reject) => {
			db.query(`select * from airline;`, (err, res) => {
				if (err) {
					reject(err);
				}
				resolve(res);
			});
		});
	},

	// get detail
	getDetailAirline: (id_airline) => {
		return new Promise((resolve, reject) => {
			db.query(
				`select * from airline where id_airline='${id_airline}';`,
				(err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res);
				}
			);
		});
	},

	// search airline
	findAirline: (limit, page, sortBy, sortOrd, airlineName) => {
		return new Promise((resolve, reject) => {
			const offset = (page - 1) * limit;

			if (sortOrd.toLowerCase() !== "desc") sortOrd = "asc";
			if (sortBy.toLowerCase() !== "date_created") sortBy = "name";

			db.query(
				`select * from airline where lower(name) like lower('%${airlineName}%') order by ${sortBy} ${sortOrd} limit ${limit} offset ${offset}`,
				(err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res);
				}
			);
		});
	},

	// search airline by name
	searchAirline: (name) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
            SELECT * FROM airline WHERE name ILIKE '%${name}%'`,
				(err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res);
				}
			);
		});
	},

	// insert airline
	addAirline: ({ name, logo }) => {
		return new Promise((resolve, reject) => {
			const date = new Date();
			const yyyy = date.getFullYear();
			let mm = date.getMonth() + 1;
			let dd = date.getDate();

			if (dd < 10) dd = "0" + dd;
			if (mm < 10) mm = "0" + mm;

			const time =
				date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

			const date_created = `${yyyy}/${mm}/${dd} - ${time}`;

			db.query(
				`insert into airline (name, logo, date_created) values ('${name}', '${logo}', '${date_created}');`,
				(err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res);
				}
			);
		});
	},

	// update airline
	updateAirline: (id_airline, name) => {
		return new Promise((resolve, reject) => {
			db.query(
				`update airline set name='${name}' where id_airline=${id_airline}`,
				(err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res);
				}
			);
		});
	},

	// update airline logo
	updateLogo: ({ id_airline, logo }) => {
		return new Promise((resolve, reject) => {
			db.query(
				`update airline set logo='${logo}' where id_airline=${id_airline}`,
				(err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res);
				}
			);
		});
	},

	// delete airline
	deleteAirline: (id_airline) => {
		return new Promise((resolve, reject) => {
			db.query(
				`delete from airline where id_airline=${id_airline}`,
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

module.exports = airlineModel;
