import axios from "axios";

export const myBooking = (id_user) => ({
    type: "GET_MY_BOOKING",
    payload: new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/${id_user}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  });