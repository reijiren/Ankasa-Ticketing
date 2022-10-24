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
            success(res, result.rows, 'success', 'Get All Booking List Success');
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to get all booking list');
        });
    },

    // get detail
    detail: (req, res) => {
        const id = req.params.id;

        bookingModel.getDetailBooking(id)
        .then((result) => {
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

        bookingModel.updateStatus(id, status)
        .then((result) => {
            success(res, result.rowCount, 'success', 'Update Status Success');
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to update status');
        });
    },

    // update history
    changeHistory: (req, res) => {
        const id = req.params.id;

        bookingModel.updateHistory(id)
        .then((result) => {
            success(res, result.rowCount, 'success', 'Update Status Success');
        })
        .catch((err) => {
            failed(res, err.message, 'failed', 'Failed to update status');
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