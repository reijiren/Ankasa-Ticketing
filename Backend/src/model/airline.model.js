const db = require('../config/db');

const airlineModel = {
    // get airline list
    getAllAirline: () => {
        return new Promise((resolve, reject) => {
            db.query(`select * from airline;`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    // get detail
    getDetailAirline: (id_airline) => {
        return new Promise((resolve, reject) => {
            db.query(`select * from airline where id_airline='${id_airline}';`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    // search airline
    findAirline: (limit, page, sortBy, sortOrd, airlineName) => {
        return new Promise((resolve, reject) => {
            const offset = (page - 1) * limit;

            if(sortOrd.toLowerCase() !== 'desc') asc='asc';
            // if(sort.toLowerCase() !== 'date_created') sort='title';

            db.query(`select * from airline where lower(name) like lower('%${airlineName}%') order by ${sortBy} ${sortOrd} limit ${limit} offset ${offset}`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    // insert airline
    // update airline
    // delete airline
}

module.exports = airlineModel;