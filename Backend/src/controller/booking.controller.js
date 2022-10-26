const bookingModel = require('../model/booking.model');
const { success, failed } = require('../helper/response');

const bookingController = {
    // insert
    insert: (req, res) => {
        const data = req.body;

        bookingModel.insertBooking(data)
        .then((result) => {
            success(res, result.rowCount, 'success', 'Insert Booking Success');
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to insert booking');
        });
    },

    // get all
    list: (req, res) => {
        bookingModel.getAllBooking()
        .then((result) => {
            const data = result.rows;
            data.map((e, i) => {
                delete data[i].password;
            });
            
            success(res, data, 'success', 'Get All Booking List Success');
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to get all booking list');
        });
    },

    // get user booking
    userBooking: (req, res) => {
        const id = req.params.id;

        bookingModel.getUserBooking(id)
        .then((result) => {
            const data = result.rows;
            data.map((e, i) => {
                delete data[i].password;
            });
            
            success(res, data, 'success', 'Get User BOoking Success');
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to get user booking');
        });
    },

    // get detail
    detail: (req, res) => {
        const id = req.params.id;

        bookingModel.getDetailBooking(id)
        .then((result) => {
            delete result.rows[0].password;

            success(res, result.rows, 'success', 'Get Booking Detail Success');
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to get booking detail');
        });
    },

    // update status
    changeStatus: (req, res) => {
        const id = req.params.id;
        const { status } = req.body;

        bookingModel.getDetailBooking(id_booking)
        .then((result) => {
            if(result.rowCount != 0){
                bookingModel.updateStatus(id, status)
                .then((result) => {
                    success(res, result.rowCount, 'success', 'Update Status Success');
                })
                .catch((err) => {
                    failed(res, err.message, 'failed', 'Failed to update status');
                });
            }else{
                failed(res, null, 'failed', 'Booking ID is not found');
            }
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to update status');
        });
    },

    // update history
    changeHistory: (req, res) => {
        const id_booking = req.params.id;
        const { history } = req.body;

        bookingModel.getDetailBooking(id_booking)
        .then((result) => {
            if(result.rowCount != 0){
                bookingModel.updateHistory(id_booking, history)
                .then((result) => {
                    success(res, result.rowCount, 'success', 'Update History Success');
                })
                .catch((err) => {
                    failed(res, err.message, 'failed', 'Failed to update history');
                });
            }else{
                failed(res, null, 'failed', 'Booking ID is not found');
            }
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to update history');
        });
    },

    // delete
    destroy: (req, res) => {
        const id = req.params.id;

        bookingModel.deleteBooking(id)
        .then((result) => {
            success(res, result.rowCount, 'success', 'Delete booking Success');
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to delete booking');
        });
    }
}

module.exports = bookingController;