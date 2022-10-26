import axios from "axios";

// export const userLogin = (form) => {
//     return new Promise ((resolve, reject) => {
//         axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
//         .then((response) => {
//             resolve(response);
//         })
//         .catch((err) => {
//             reject(err);
//         })
//     })
// }

export const userLogin = (form, handleSuccess) => ({
    type: "LOGIN",
    payload: new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
        .then((res) => {
          handleSuccess(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  });

export const userRegister = (form, handleSuccess) => ({
    type: "REGISTER",
    payload: new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/register`, form)
        .then((res) => {
          handleSuccess(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  });

  export const checkEmail = (email, handleSuccess) => ({
    type: "FORGET",
    payload: new Promise((resolve, reject) => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/findemail/${email}`)
        .then((res) => {
          handleSuccess(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  });

  export const changePassword = (form, handleSuccess) => ({
    type: "FORGET",
    payload: new Promise((resolve, reject) => {
      axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/update/password/`, form)
        .then((res) => {
          handleSuccess(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  });