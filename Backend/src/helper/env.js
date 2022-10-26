require("dotenv").config();

module.exports = {
	DB_LOCALHOST: process.env.DB_HOST,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_DATABASE: process.env.DB_DATABASE,
	DB_PORT: process.env.DB_PORT,
	JWT_SECRET: process.env.JWT_SECRET,
};
