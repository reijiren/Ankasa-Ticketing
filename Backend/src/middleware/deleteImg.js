const fs = require('fs');
const airlineModel = require('../model/airline.model');
// const userModel = require("../model/user.model");

module.exports = {
    removeProfilePic: async (req, res, next) => {
        const id = req.params.id;

        // const data = await userModel.findUser(id);
        if (data.rows[0].photo) {
            const img = data.rows[0].photo;
            if(img !== 'default.png'){
            fs.unlink(`./assets/profile_pic/${img}`, (err) => {
                if (err) {
                res.json({
                    message: 'delete failed',
                    error: err,
                })
                }
            });
            }
            next();
        } else {
            res.json("There is no profile picture");
        }
    },

    removeAirlineLogo: async (req, res, next) => {
        const id = req.params.id;

        const data = await airlineModel.getDetailAirline(id);
        if (data.rows[0].logo) {
            const img = data.rows[0].logo;
            if(img !== 'default.png'){
            fs.unlink(`./assets/airline/${img}`, (err) => {
                if (err) {
                res.json({
                    message: 'delete failed',
                    error: err,
                })
                }
            });
            }
            next();
        } else {
            res.json("There is no logo");
        }
    },
}