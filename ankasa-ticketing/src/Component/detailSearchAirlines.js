import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { airlineDelete, findAirline, getSearchAirlines } from "../redux/action/airline";
import "../assets/style.css";

const SearchAirlineDetail = () => {
	const [queryParam] = useSearchParams();
	const dispatch = useDispatch();

	const name = queryParam.get("name") || "";
	const page = 1;

	const body = {
		limit: 3,
		sortBy: "name",
		sortOrd: "asc",
		airlineName: name ? name : "",
	}

	useEffect(() => {
		const handleSuccess = (data) => {
			console.log(data);
		};

		dispatch(findAirline(page, body, handleSuccess));
	}, []);

	const [delAirlines, setDelAirlines] = useState([]);

	const airline = useSelector((state) => {
		return state.airline;
	});

	const deleteAirlines = (id_airline, e) => {
		e.preventDefault();

		airlineDelete(id_airline)
			.then((res) => {
				console.log(res);

				const posts = delAirlines.filter(
					(item) => item.id_airline !== id_airline
				);
				setDelAirlines({ data: posts });

				alert("Data berhasil dihapus");

				// return navigate("/home");
			})
			.catch((err) => {
				console.log(err);
				alert("Failed Delete Data");
			});
	};
	// console.log(airline.airline);

	return (
		<div>
			<div className="container-fluid row">
				{airline.isLoading ? (
					<h1>loading</h1>
				) : airline.isError ? (
					<div></div>
				) : (!airline.airline || airline.airline == "") ? (
					<h1>Data is not found</h1>
				) : (
					airline.airline.map((item, index) => {
						return (
							<div
								key={index}
								className="col-7 position relative start-50 translate-middle-x my-3">
								<div className="details row">
									<div className="col-auto">
										<img
											src={`${process.env.REACT_APP_BACKEND_URL}/airline/${item.logo}`}
											className="logo"
										/>
									</div>
									<div className="col-auto">
										<p className="fs-2 airline-name">{item.name}</p>
									</div>
									<div className="position-relative start-50 translate-middle-x">
										<Link to={`/admin/update-airlines/${item.id_airline}`}>
											<button>Update</button>
										</Link>
										<button
											type="button"
											onClick={(e) => deleteAirlines(item.id_airline, e)}>
											Delete
										</button>
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default SearchAirlineDetail;
