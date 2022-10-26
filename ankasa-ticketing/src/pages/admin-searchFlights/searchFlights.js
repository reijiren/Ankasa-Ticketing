import React from "react";
import NavAdmin from "../../Component/navAdmin";

const SearchFlights = () => {
	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`col-7 position relative start-50 translate-middle-x`}>
					<div className={`text-center`}>
						<h1>Search Flights</h1>
					</div>
					<div class="mb-3">
						<label htmlFor="exampleInputEmail1" class="form-label">
							Search Flights
						</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchFlights;