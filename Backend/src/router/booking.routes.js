const express = require('express');
const { list, insert, detail, changeStatus, changeHistory, destroy, userBooking } = require('../controller/booking.controller');

const router = express.Router();

const jwtAuth = require('../middleware/jwtAuth');
const { isAdmin, isCustomer } = require('../middleware/auth');

router
.post('/booking/insert', insert)
.get('/booking', list)
.get('/booking/user/:id', userBooking)
.get('/booking/detail/:id', detail)
.put('/booking/status/:id', changeStatus)
.put('/booking/history/:id', changeHistory)
.delete('/booking/delete/:id', destroy);

module.exports = router;