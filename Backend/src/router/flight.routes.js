const express = require("express");
const {
  list,
  detail,
  find,
  insert,
  update,
  destroy,
  updateCapacity,
} = require("../controller/flight.controller");

const router = express.Router();

const jwtAuth = require("../middleware/jwtAuth");
const { isAdmin, isCustomer } = require("../middleware/auth");

router
  .get("/flight", list)
  .get("/flight/detail", detail)
  .post("/flight/find/:page", find)
  .post("/flight/insert", insert)
  .put("/flight/update", update)
  .put("/flight/capacity", updateCapacity)
  .delete("/flight/delete", destroy);

module.exports = router;
