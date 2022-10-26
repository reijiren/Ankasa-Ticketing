import axios from "axios";

export const getDetailAirline = (id) => ({
  type: "GET_DETAIL_AIRLINE",
  payload: new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/airline/${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});
