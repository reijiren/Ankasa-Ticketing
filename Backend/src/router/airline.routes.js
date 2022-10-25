const express = require('express');
const { listAirline, detailAirline, findAirline, addAirline, updateAirline, updateLogo, deleteAirline } = require('../controller/airline.controller');

const router = express.Router();

const jwtAuth = require('../middleware/jwtAuth');
const { isAdmin, isCustomer } = require('../middleware/auth');
const {uploadAirlineLogo} = require('../middleware/uploadImg');
const {removeAirlineLogo} = require('../middleware/deleteImg');

router
.get('/airline', listAirline)
.get('/airline/:id', detailAirline)
.post('/airline/find/:page', findAirline)
.post('/airline/insert', uploadAirlineLogo, addAirline)
.put('/airline/update/:id', updateAirline)
.put('/airline/changeimg/:id', uploadAirlineLogo, removeAirlineLogo, updateLogo)
.delete('/airline/delete/:id', removeAirlineLogo, deleteAirline);

module.exports = router;