import axios from "axios";

export const getSearchAirlines = (name, handleSuccess) => {
	return {
		type: "GET_SEARCH_AIRLINES",
		payload: new Promise((resolve, reject) => {
			axios({
				url: `${process.env.REACT_APP_BACKEND_URL}/airline/search/${name}`,
				method: "GET",
			})
				.then((response) => {
					resolve(response);
					handleSuccess();
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};

export const addAirlines = (form, addImage, handleSuccess) => {
	return {
		type: "INSERT_AIRLINES",
		payload: new Promise((resolve, reject) => {
			axios
				.post(
					`${process.env.REACT_APP_BACKEND_URL}/airline/insert`,
					form,
					addImage
				)
				.then((response) => {
					resolve(response);
					handleSuccess();
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};

export const airlineDelete = (id_airline) => {
	return new Promise((resolve, reject) => {
		axios
			.delete(
				`${process.env.REACT_APP_BACKEND_URL}/airline/delete/${id_airline}
			`
			)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const getDetailAirline = (id) => ({
	type: "GET_DETAIL_AIRLINE",
	payload: new Promise((resolve, reject) => {
		axios
			.get(`http://localhost:3001/airline/${id_airline}`)
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	}),
});
