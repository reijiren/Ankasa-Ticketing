const fs = require("fs");
const userModel = require("../model/user.model");
const airlineModel = require("../model/airline.model");

module.exports = {
	removeProfilePic: async (req, res, next) => {
		const id = req.params.id;

		const data = await userModel.selectUserId(id);
		if(data) {
			if (data.rows[0].photo) {
				const img = data.rows[0].photo;
				if (img !== "default.png") {
					fs.unlink(`./assets/profile_pic/${img}`, (err) => {
						if (err) {
							console.log(err)
						}
					});
				}
				next();
			} else {
				res.json("There is no profile picture");
			}
		}else{
			res.json("Airline ID is not found");
		}
	},

	removeAirlineLogo: async (req, res, next) => {
		const id = req.params.id;

		const data = await airlineModel.getDetailAirline(id);
		if(data.rowCount !== 0){
			if (data.rows[0].logo) {
				const img = data.rows[0].logo;
				if (img !== "default.png") {
					fs.unlink(`./assets/airline/${img}`, (err) => {
						if (err) {
							console.log(err)
						}
					});
				}
				next();
			} else {
				res.json("There is no logo");
			}
		}else{
			res.json("Airline ID is not found");
		}
	},
};
