import React from "react";
import NavAdmin from "../../Component/navAdmin";

const SearchAirlines = () => {
	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`col-7 position relative start-50 translate-middle-x`}>
					<div className={`text-center`}>
						<h1>Search Airlines</h1>
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">
							Search Airlines
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

export default SearchAirlines;
