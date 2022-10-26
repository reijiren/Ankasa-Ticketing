import React from "react";
import NavAdmin from "../../Component/navAdmin";

const UpdateAirlines = () => {
	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`col-7 position-relative start-50 translate-middle-x`}>
					<div className={`text-center`}>
						<h1>Update Airlines</h1>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Airlines Name
						</label>
						<input
							type="text"
							className="form-control"
							id="formGroupExampleInput"
							placeholder="Example: Garuda Indonesia"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="formFile" className="form-label">
							Logo Airlines
						</label>
						<input className="form-control" type="file" id="formFile" />
					</div>
					<input className="btn btn-primary" type="submit" value="Submit" />
				</div>
			</div>
		</div>
	);
};

export default UpdateAirlines;
