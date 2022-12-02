import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavAdmin from "../../Component/navAdmin";
import { insertDataFlight } from "../../redux/action/flight";

const InsertFlight = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const data = {
		id_flight: "",
		airline: 1,
		city_departure: "",
		city_destination: "",
		region_departure: "",
		region_destination: "",
		max_capacity: 0,
		luggage: 0,
		inflight_meal: 0,
		wifi: 0,
		time_departure: "",
		time_arrived: "",
		price: 0,
		refundable: 0,
		reschedule: 0,
		insurance: 0,
		transit: 0,
	};

	const [form, setForm] = useState(data);

	const onSubmit = (e) => {
		e.preventDefault();

		// let inputForm = new FormData();
		// inputForm.append("id_flight", form.id_flight);
		// inputForm.append("airline", form.airline);
		// inputForm.append("city_departure", form.city_departure);
		// inputForm.append("city_destination", form.city_destination);
		// inputForm.append("region_departure", form.region_departure);
		// inputForm.append("region_destination", form.region_destination);
		// inputForm.append("max_capacity", form.max_capacity);
		// inputForm.append("luggage", form.luggage);
		// inputForm.append("inflight_meal", form.inflight_meal);
		// inputForm.append("wifi", form.wifi);
		// inputForm.append("time_departure", form.time_departure);
		// inputForm.append("time_arrived", form.time_arrived);
		// inputForm.append("price", form.price);
		// inputForm.append("refundable", form.refundable);
		// inputForm.append("reschedule", form.reschedule);
		// inputForm.append("insurance", form.insurance);
		// inputForm.append("transit", form.transit);

		console.log(form);

		dispatch(insertDataFlight(form));
	};

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div
					className={`col-md-7 position-relative start-50 translate-middle-x pb-3`}>
					<div className={`text-center`}>
						<h1>Insert Flights</h1>
					</div>
					<form onSubmit={(e) => onSubmit(e)}>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								ID Flight
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: AAP-229"
								onChange={(e) => {
									setForm({ ...form, id_flight: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								ID Airlines
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: 1"
								onChange={(e) => {
									setForm({ ...form, airline: parseInt(e.target.value) });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								City Departure
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Jakarta"
								onChange={(e) => {
									setForm({ ...form, city_departure: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								City Destination
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Tokyo"
								onChange={(e) => {
									setForm({ ...form, city_destination: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Region Departure
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Indonesia"
								onChange={(e) => {
									setForm({ ...form, region_departure: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Region Deestination
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: Japan"
								onChange={(e) => {
									setForm({ ...form, region_destination: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Max Capacity
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: 1000"
								onChange={(e) => {
									setForm({ ...form, max_capacity: parseInt(e.target.value) });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Luggage
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, luggage: parseInt(e.target.value) });
								}}>
								<option defaultValue="">Luggage Option</option>
								<option value={0}>No Luggage</option>
								<option value={1}>With</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Flights Meal
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, inflight_meal: parseInt(e.target.value) });
								}}>
								<option defaultValue="">Meal Option</option>
								<option value={0}>No Meal</option>
								<option value={1}>With Meal</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Flights WiFi
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, wifi: parseInt(e.target.value) });
								}}>
								<option defaultValue="">WiFi Option</option>
								<option value={0}>No WiFi</option>
								<option value={1}>With WiFi</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Time Departure
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: 05:00:00"
								onChange={(e) => {
									setForm({ ...form, time_departure: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Time Arrived
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: 15:00:00"
								onChange={(e) => {
									setForm({ ...form, time_arrived: e.target.value });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Price
							</label>
							<input
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Example: 5000000"
								onChange={(e) => {
									setForm({ ...form, price: parseInt(e.target.value) });
								}}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Refundable
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, refundable: parseInt(e.target.value) });
								}}>
								<option defaultValue="">Refundable Option</option>
								<option value={0}>No Refundable</option>
								<option value={1}>With Refundable</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Reschedule
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, reschedule: parseInt(e.target.value) });
								}}>
								<option defaultValue="">Reschedule Option</option>
								<option value={0}>No Reschedule</option>
								<option value={1}>With Reschedule</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Insurance
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, insurance: parseInt(e.target.value) });
								}}>
								<option defaultValue="">Insurance Option</option>
								<option value={0}>No Insurance</option>
								<option value={1}>With Insurance</option>
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">
								Transit
							</label>
							<select
								className="form-select form-select-sm"
								aria-label=".form-select-sm example"
								onChange={(e) => {
									setForm({ ...form, transit: parseInt(e.target.value) });
								}}>
								<option defaultValue="">Transit Option</option>
								<option value={0}>No Transit</option>
								<option value={1}>With Transit</option>
							</select>
						</div>
						<div className="mb-4 mt-4">
							<input
								className="btn btn-secondary position-absolute start-50 translate-middle-x col-5"
								type="submit"
								value="Submit"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default InsertFlight;
