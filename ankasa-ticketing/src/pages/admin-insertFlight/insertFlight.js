import React from "react";
import NavAdmin from "../../Component/navAdmin";

const InsertFlight = () => {
	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div
					className={`col-md-7 position-relative start-50 translate-middle-x pb-3`}>
					<div className={`text-center`}>
						<h1>Insert Flights</h1>
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
						<label htmlFor="formGroupExampleInput" className="form-label">
							City Departure
						</label>
						<input
							type="text"
							className="form-control"
							id="formGroupExampleInput"
							placeholder="Example: Jakarta"
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
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Luggage
						</label>
						<div class="dropdown">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Luggage Option
							</button>
							<ul class="dropdown-menu">
								<li>
									<a class="dropdown-item" href="#">
										No Luggage (0)
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										With Luggage (1)
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Flights Meal
						</label>
						<div class="dropdown">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Meal Option
							</button>
							<ul class="dropdown-menu">
								<li>
									<a class="dropdown-item" href="#">
										No Meal (0)
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										With Meal (1)
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Flights WiFi
						</label>
						<div class="dropdown">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								WiFi Option
							</button>
							<ul class="dropdown-menu">
								<li>
									<a class="dropdown-item" href="#">
										No WiFi (0)
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										With WiFi (1)
									</a>
								</li>
							</ul>
						</div>
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
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Refundable
						</label>
						<div class="dropdown">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Refundable Option
							</button>
							<ul class="dropdown-menu">
								<li>
									<a class="dropdown-item" href="#">
										No Refund (0)
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										Refund (1)
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Reschedule
						</label>
						<div class="dropdown">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Reschedule Option
							</button>
							<ul class="dropdown-menu">
								<li>
									<a class="dropdown-item" href="#">
										No Reschedule (0)
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										Reschedule (1)
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mb-4 mt-4">
						<input
							className="btn btn-secondary position-absolute start-50 translate-middle-x col-5"
							type="submit"
							value="Submit"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InsertFlight;
