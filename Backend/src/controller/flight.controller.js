const flightModel = require("../model/flight.model");
const { success, failed } = require("../helper/response");

const flightController = {
  // get all
  list: (req, res) => {
    flightModel
      .getAllFlight()
      .then((result) => {
        success(res, result.rows, "success", "Get All Flight List Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to get all flight list");
      });
  },

  // get detail
  detail: (req, res) => {
    const id_flight = req.query.id;

    flightModel
      .detailFlight(id_flight)
      .then((result) => {
        success(res, result.rows, "success", "Get Detail Flight Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to get detail flight");
      });
  },

  // find flight
  find: (req, res) => {
    const page = req.params.page;
    const data = req.body;

    flightModel
      .findFlight(data.limit, page, data.sortBy, data.sortOrd, data.data)
      .then((result) => {
        success(res, result.rows, "success", "Search Flight Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to search flight");
      });
  },

  // delete flight
  destroy: (req, res) => {
    const id_flight = req.query.id;

    flightModel
      .deleteFlight(id_flight)
      .then((result) => {
        success(res, result.rowCount, "success", "Delete Flight Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to delete flight");
      });
  },

  // update flight
  update: (req, res) => {
    const { data } = req.body;

    flightModel
      .updateFlight(data)
      .then((result) => {
        success(res, result.rowCount, "success", "Update Flight Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to update flight");
      });
  },

  // update capacity
  updateCapacity: (req, res) => {
    const { id_flight, capacity } = req.body;

    flightModel
      .updateCapacity(id_flight, capacity)
      .then((result) => {
        success(
          res,
          result.rowCount,
          "success",
          "Update Flight Capacity Success"
        );
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to update flight capacity");
      });
  },

  // insert flight
  insert: (req, res) => {
    const { data } = req.body;

    flightModel
      .insertFlight(data)
      .then((result) => {
        success(res, result.rowCount, "success", "Insert Flight Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to insert flight");
      });
  },
};

module.exports = flightController;
