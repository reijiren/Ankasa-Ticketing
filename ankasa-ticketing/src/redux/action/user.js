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

export const adminLogin = (form, handleSuccess) => ({
	type: "LOGIN",
	payload: new Promise((resolve, reject) => {
		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/admin/login`, form)
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
