const { query } = require('express');
const db = require('../config/db');

const bookingModel = {
    // insert
    insertBooking: (data) => {
        const date = new Date();
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();

        if (dd< 10) dd = '0' + dd;
        if (mm< 10) mm = '0' + mm;

        const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        const date_created = `${yyyy}/${mm}/${dd} - ${time}`;

        return new Promise((resolve, reject) => {
            db.query(`insert into booking (id_user, id_flight, status, passenger, terminal, gate, class, seat, history, date_created)
            values (${data.id_user}, '${data.id_flight}', ${data.status}, ${data.passenger}, '${data.terminal}', ${data.gate}, '${data.class}', '${data.seat}', 0, '${date_created}');`,
            (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    // get all
    getAllBooking: () => {
        return new Promise((resolve, reject) => {
            db.query(`select * from booking
            join users on booking.id_user = users.id_user
            join flight on booking.id_flight = flight.id_flight;`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    // get detail
    getDetailBooking: (id_booking) => {
        return new Promise((resolve, reject) => {
            db.query(`select * from booking
            join users on booking.id_user = users.id_user
            join flight on booking.id_flight = flight.id_flight
            join airline on airline.id_airline = flight.airline
            where id_booking = ${id_booking};`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    // get detail user's bookings
    getUserBooking: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`select * from booking
            join users on booking.id_user = users.id_user
            join flight on booking.id_flight = flight.id_flight
            where booking.id_user = ${id};`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    // update status
    updateStatus: (id, status) => {
        if(typeof status !== 'number') status = parseInt(status);
        return new Promise((resolve, reject) => {
            db.query(`update booking set status = ${status} where id_booking = ${id}`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        });
    },

    // update history
    updateHistory: (id_booking, history) => {
        return new Promise((resolve, reject) => {
            db.query(`update booking set history = ${history} where id_booking = ${id_booking};`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        });
    },

    // delete
    deleteBooking: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`delete from booking where id_booking='${id}'`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    }
}

module.exports = bookingModel;