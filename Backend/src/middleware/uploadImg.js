const multer = require("multer");
const path = require("path");

const currentDate = new Date();
const dateTime =
	currentDate.getDate() +
	(currentDate.getMonth() + 1) +
	currentDate.getFullYear();
const timestamp =
	currentDate.getHours() +
	currentDate.getMinutes() +
	currentDate.getSeconds() +
	currentDate.getMilliseconds();

const multerProfileUpload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, "./assets/profile_pic");
		},
		filename: (req, file, cb) => {
			const fileName = nameSplit[0] + " - " + dateTime + timestamp + ext;
			cb(null, fileName);
		},
	}),
	limits: {
		// limit filesize up to 1mb
		fileSize: 1024 * 1024,
	},

	fileFilter: (req, file, cb) => {
		const ext = path.extname(file.originalname);
		if (
			ext === ".jpg" ||
			ext === ".png" ||
			ext === ".jpeg" ||
			ext === ".jfif"
		) {
			cb(null, true);
		} else {
			const error = {
				message: "File type is not supported",
			};
			cb(error, false);
		}
	},
});

const multerAirlineUpload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, "./assets/airline");
		},
		filename: (req, file, cb) => {
			const fileName = nameSplit[0] + " - " + dateTime + timestamp + ext;
			cb(null, fileName);
		},
	}),
	limits: {
		// limit filesize up to 1MB
		fileSize: 1024 * 1024,
	},

	fileFilter: (req, file, cb) => {
		if (
			ext === ".jpg" ||
			ext === ".png" ||
			ext === ".jpeg" ||
			ext === ".jfif" ||
			ext === ".svg"
		) {
			cb(null, true);
		} else {
			const error = {
				message: "File type is not supported",
			};
			cb(error, false);
		}
	},
});

module.exports = {
	uploadProfilePic: (req, res, next) => {
		const multerSingle = multerProfileUpload.single("photo");
		multerSingle(req, res, (err) => {
			if (err) {
				res.json({
					message: "upload failed",
					error: err,
				});
			} else {
				next();
			}
		});
	},
	uploadAirlineLogo: (req, res, next) => {
		const multerSingle = multerAirlineUpload.single("logo");
		multerSingle(req, res, (err) => {
			if (err) {
				res.json({
					message: "upload failed",
					error: err,
				});
			} else {
				next();
			}
		});
	},
};
