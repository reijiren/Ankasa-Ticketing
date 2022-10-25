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
