import axios from "axios";

export const myBooking = (id_user, handleSuccess) => ({
    type: "GET_MY_BOOKING",
    payload: new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/booking/user/${id_user}`)
        .then((res) => {
            handleSuccess(res)
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  });

export const getDetailBooking = (id) => ({
  type: "GET_DETAIL_BOOKING",
  payload: new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/booking/detail/${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});

export const insertBooking = (body) => ({
  type: "ADD_BOOKING",
  payload: new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3001/booking/insert`, body)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});
