import React, { useState } from "react";
import NavAdmin from "../../Component/navAdmin";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetailFlight } from "../../redux/action/flight";
import SearchFlightDetail from "../../Component/detailSearchFlight";

const SearchFlights = () => {
	const [idFlight, setIdFlight] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

		const handleSuccess = () => {
			return navigate(`/admin/search-flights?id=${idFlight}`);
		};

		dispatch(getDetailFlight(idFlight, handleSuccess));
	};

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`col-7 position relative start-50 translate-middle-x`}>
					<div className={`text-center`}>
						<h1>Search Flights</h1>
					</div>
					<form onSubmit={(e) => onSubmit(e)}>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Search Flights
							</label>
							<input
								type="text"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								onChange={(e) => setIdFlight(e.target.value)}
							/>
						</div>
					</form>
					<SearchFlightDetail />
				</div>
			</div>
		</div>
	);
};

export default SearchFlights;
