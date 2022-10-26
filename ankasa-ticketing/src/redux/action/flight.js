import axios from "axios";

// export const getFlight = () => {
//   return {
//     type: "GET_FLIGHT",
//     payload: axios({
//       method: "GET",
//       url: "http://localhost:3001/flight",
//     }),
//   };
// };
export const getFlight = (handleSuccess) => ({
    type: 'GET_FLIGHT',
    payload: new Promise((resolve, reject) => {
        console.log('masuk')
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
