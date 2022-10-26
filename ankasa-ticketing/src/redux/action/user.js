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
export const getUser = (id_user, handleSuccess) => ({
  type: "GET_USER",
  payload: new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3001/user/${id_user}`)
      .then((res) => {
        handleSuccess(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});

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

export const updateUser = (form, id_user, handleSuccess) => ({
  type: "UPDATE_USER",
  payload: new Promise((resolve, reject) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/update/${id_user}`, form)
      .then((res) => {
        console.log(res);
        handleSuccess(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});

export const updatePhoto = (form, id_user, handleSuccess) => ({
  type: "UPDATE_PHOTO",
  payload: new Promise((resolve, reject) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/update/photo/${id_user}`, form,{
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      .then((res) => {
        console.log(res);
        handleSuccess(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
})
