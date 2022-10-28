import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavAdmin from "../../Component/navAdmin";
import { getDetailAirline } from "../../redux/action/airline";

const UpdateAirlines = () => {
	const dispatch = useDispatch();
	const {id} = useParams();

	const [name, setName] = useState('');

	useEffect(() => {
		const handleSuccess = (data) => {
			setName(data.data.data[0].name)
		}

		dispatch(getDetailAirline(id, handleSuccess))
	}, [])

	const onSubmit = (e) => {

	}

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
							defaultValue={ name }
							onChange={(e) => setName(e.target.value)}
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
