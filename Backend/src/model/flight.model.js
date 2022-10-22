const db = require('../config/db');

const flightModel = {
    // all flight list (NOT DONE)
    getAllFlight: () => {
        return new Promise((resolve, reject) => {
            db.query(`select * from flight;`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },
    // detail flight
    // search flight
    // delete flight
    // update flight
    // insert new flight
}

module.exports = flightModel;