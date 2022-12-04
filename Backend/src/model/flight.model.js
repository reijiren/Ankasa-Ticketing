const { resolve } = require("path");
const db = require("../config/db");

const flightModel = {
  // all flight list
  getAllFlight: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `select * from flight join airline on flight.airline = airline.id_airline;`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  // detail flight
  detailFlight: (id_flight) => {
    return new Promise((resolve, reject) => {
      db.query(
        `select * from flight join airline on flight.airline = airline.id_airline where id_flight='${id_flight}';`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  // search flight
  findFlight: (limit, page, sortBy, sortOrd, data) => {
    if (page < 1) page = 1;
    const offset = (page - 1) * limit;

    if (sortOrd.toLowerCase() !== "desc") sortOrd = "asc";
    if (
      !(
        sortBy.toLowerCase() === "name" ||
        sortBy.toLowerCase() === "city_departure" ||
        sortBy.toLowerCase() === "city_destination" ||
        sortBy.toLowerCase() === "region_departure" ||
        sortBy.toLowerCase() === "region_destination" ||
        sortBy.toLowerCase() === "class" ||
        sortBy.toLowerCase() === "price"
      )
    )
      sortBy = "date_created";

    let counter = 1;
    const max = Object.keys(data).length;

    const addCount = () => {
      counter = counter + 1;
      return "or ";
    };

    return new Promise((resolve, reject) => {
      db.query(
        `select * from flight join airline on flight.airline = airline.id_airline where 
            ${
              data.price
                ? `(price between ${data.price.min} and ${data.price.max}) ${
                    counter < max ? addCount() : " "
                  }`
                : ""
            }
            ${
              data.direct
                ? `transit = 0 ${counter < max ? addCount() : ""}`
                : ""
            }
            ${
              data.transit
                ? `transit = 1 ${counter < max ? addCount() : ""}`
                : ""
            }
            ${
              data.transit2
                ? `transit = 2 ${counter < max ? addCount() : ""}`
                : ""
            }
            ${
              data.luggage
                ? `luggage = 1 ${counter < max ? addCount() : ""}`
                : ""
            }
            ${
              data.inflight_meal
                ? `inflight_meal = 1 ${counter < max ? addCount() : ""}`
                : ""
            }
            ${data.wifi ? `wifi = 1 ${counter < max ? addCount() : ""}` : ""}
            ${
              data.depMidnight
                ? `(time_departure >= '00:00:00' and time_departure <= '05:59:59' ${
                    counter < max ? addCount() : ""
                  }`
                : ""
            }
            ${
              data.depMorning
                ? `(time_departure >= '06:00:00' and time_departure <= '11:59:59' ${
                    counter < max ? addCount() : ""
                  }`
                : ""
            }
            ${
              data.depAfternoon
                ? `(time_departure >= '12:00:00' and time_departure <= '17:59:59' ${
                    counter < max ? addCount() : ""
                  }`
                : ""
            }
            ${
              data.depNight
                ? `(time_departure >= '18:00:00' and time_departure <= '23:59:59' ${
                    counter < max ? addCount() : ""
                  }`
                : ""
            }
            ${
              data.arrMidnight
                ? `(time_arrived >= '00:00:00' and time_arrived <= '05:59:59' ${
                    counter < max ? addCount() : ""
                  }`
                : ""
            }
            ${
              data.arrMorning
                ? `(time_arrived >= '06:00:00' and time_arrived <= '11:59:59' ${
                    counter < max ? addCount() : ""
                  }`
                : ""
            }
            ${
              data.arrAfternoon
                ? `(time_arrived >= '12:00:00' and time_arrived <= '17:59:59' ${
                    counter < max ? addCount() : ""
                  }`
                : ""
            }
            ${
              data.arrNight
                ? `(time_arrived >= '18:00:00' and time_arrived <= '23:59:59' ${
                    counter < max ? addCount() : ""
                  }`
                : ""
            }
            ${
              (data.city_departure !== undefined && data.city_departure !== null)
                ? `lower(city_departure) like lower('%${
                    data.city_departure
                  }%') ${counter < max ? addCount() : ""}`
                : ""
            }
            ${
              (data.city_destination !== undefined && data.city_destination !== null)
                ? `lower(city_destination) like lower('%${
                    data.city_destination
                  }%') ${counter < max ? addCount() : ""}`
                : ""
            }
            ${
              (data.airlineName !== undefined && data.airlineName !== null)
                ? `lower(name) like lower('%${data.airlineName}%')`
                : ""
            }
            ${max < 1 ? `airline.name like '%%'` : ""}
            order by ${sortBy} ${sortOrd} limit ${limit} offset ${offset}`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  // delete flight
  deleteFlight: (id_flight) => {
    return new Promise((resolve, reject) => {
      db.query(
        `delete from flight where id_flight='${id_flight}'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  // update flight
  updateFlight: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `update flight set airline=${data.airline}, city_departure='${data.city_departure}', city_destination='${data.city_destination}',
            region_departure='${data.region_departure}', region_destination='${data.region_destination}', max_capacity=${data.max_capacity}, luggage=${data.luggage}, inflight_meal=${data.inflight_meal},
            wifi=${data.wifi}, time_departure='${data.time_departure}', time_arrived='${data.time_arrived}', price=${data.price}, refundable=${data.refundable},
            reschedule=${data.reschedule}, insurance=${data.insurance}, transit=${data.transit} where id_flight='${data.id_flight}'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  // update flight capacity
  updateCapacity: (id, passenger) => {
    return new Promise((resolve, reject) => {
      db.query(
        `update flight set current_capacity=${passenger} where id_flight='${id}'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  // insert new flight
  insertFlight: (data) => {
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const date_created = `${yyyy}/${mm}/${dd} - ${time}`;

    return new Promise((resolve, reject) => {
      db.query(
        `insert into flight values (
                '${data.id_flight}', ${data.airline},  '${data.city_departure}', '${data.city_destination}',
                '${data.region_departure}', '${data.region_destination}', ${data.max_capacity}, 0, ${data.luggage}, ${data.inflight_meal}, ${data.wifi},
                '${data.time_departure}', '${data.time_arrived}', ${data.price}, ${data.refundable}, ${data.reschedule}, ${data.insurance},
                ${data.transit}, '${date_created}'
                );`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
};

module.exports = flightModel;
