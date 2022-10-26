import React from "react";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from "react-router-dom";
import BookingDetail from "../pages/booking-detail/booking-detail";
import FlightDetail from "../pages/flight-detail/flight-detail";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Forget from "../pages/forget/forget";
import Mybook from "../pages/mybooking/mybooking";
import SeacrhResult from "../pages/search-result/search-result";
import Explore from "../pages/explore/explore";
import HomeAdmin from "../pages/admin-home";
import LoginAdmin from "../pages/login-admin/loginAdmin";
import InsertAirlines from "../pages/admin-insertAirlines/insertAirlines";
import UpdateAirlines from "../pages/admin-updateAirlines/updateAirlines";
import SearchAirlines from "../pages/admin-searchAirlines/searchAirlines";
import InsertFlight from "../pages/admin-insertFlight/insertFlight";
import SearchFlights from "../pages/admin-searchFlights/searchFlights";
import UpdateFlights from "../pages/admin-updateFlights/updateFlights";
import SearchUser from "../pages/admin-searchUser/searchUser";
// import SearchAirlineDetail from "../pages/admin-searchAirlines/detailSearchAirlines";

import ScrollToTop from "../Component/ScrollToTop";

const PrivateRoute = () => {
	const token = localStorage.getItem("token");

	if (token) {
		return <Outlet />;
	} else {
		alert("Please login first");
		return <Navigate to="/login" />;
	}
};

const AdminRoute = () => {
	const level = localStorage.getItem("level");

	if (level == 0) {
		return <Outlet />;
	} else {
		alert("You have no access to this site");
		return <Navigate to="/admin" />;
	}
};

const Router = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/">
					<Route index element={<Explore />} />
					<Route path="flight-detail/:id_flight" element={<FlightDetail />} />
					<Route path="profile" element={<Profile />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="forget" element={<Forget />} />
					<Route path="mybook" element={<Mybook />} />
					<Route path="booking-detail" element={<BookingDetail />} />
					<Route path="search-result" element={<SeacrhResult />} />
				</Route>
				<Route path="/admin">
					<Route index element={<LoginAdmin />} />
					<Route path="home" element={<AdminRoute />}>
						<Route index element={<HomeAdmin />} />
					</Route>
					<Route path="insert-airlines" element={<AdminRoute />}>
						<Route index element={<InsertAirlines />} />
					</Route>
					<Route path="search-airlines" element={<AdminRoute />}>
						<Route index element={<SearchAirlines />} />
					</Route>
					{/* <Route path="airlines" element={<AdminRoute />}>
						<Route index element={<SearchAirlineDetail />} />
					</Route> */}
					<Route path="update-airlines/:id" element={<AdminRoute />}>
						<Route index element={<UpdateAirlines />} />
					</Route>
					<Route path="insert-flights" element={<AdminRoute />}>
						<Route index element={<InsertFlight />} />
					</Route>
					<Route path="search-flights" element={<AdminRoute />}>
						<Route index element={<SearchFlights />} />
					</Route>
					<Route path="update-flights" element={<AdminRoute />}>
						<Route index element={<UpdateFlights />} />
					</Route>
					<Route path="search-user" element={<AdminRoute />}>
						<Route index element={<SearchUser />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
