//koneksi ke postgresql

//declare library
const pg = require("pg");
const { DB_DATABASE, DB_LOCALHOST, DB_USERNAME, DB_PASSWORD, DB_PORT } = require('../helper/env')

try{
    const db = new pg.Pool({
        host: DB_LOCALHOST,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        port : DB_PORT
    });

    //cek koneksi
    db.connect((err) => {
        if(err){
            throw "Cannot connect to Database";
        }
    });

    module.exports = db;
}catch(err){
    console.log(err);
}
