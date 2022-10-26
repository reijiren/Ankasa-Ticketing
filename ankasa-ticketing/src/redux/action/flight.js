import axios from "axios";

export const getFlight = (handleSuccess) => ({
    type: 'GET_FLIGHT',
    payload: new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/flight')
        .then((res) => {
            handleSuccess(res)
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        })
    }),
})

export const getFindFlight = (page, body, handleSuccess) => ({
  type: "GET_FIND_FLIGHT",
  payload: new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/flight/find/${page}`, body)
      .then((res) => {
        handleSuccess(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});

export const getDetailFlight = (id_flight) => ({
  type: "GET_DETAIL_FLIGHT",
  payload: new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/flight/detail?id=${id_flight}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});
