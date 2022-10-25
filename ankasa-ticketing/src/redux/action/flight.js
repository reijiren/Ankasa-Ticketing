import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const getFlight = () => {
  return {
    type: "GET_FLIGHT",
    payload: axios({
      method: "GET",
      url: "http://localhost:3001/flight",
    }),
  };
};

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
