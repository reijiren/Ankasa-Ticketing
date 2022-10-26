import React from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
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

import ScrollToTop from "../component/ScrollToTop";

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
  const data = localStorage.getItem("data");

  if (data.level !== 0) {
    return <Outlet />;
  } else {
    alert("You have no access to this site");
    return <Navigate to="/" />;
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
					<Route index element={<HomeAdmin />} />
          <Route path="login" element={<LoginAdmin />} />
          <Route path="insert-airlines" element={<InsertAirlines />} />
          <Route path="update-airlines" element={<UpdateAirlines />} />
          <Route path="search-airlines" element={<SearchAirlines />} />
          <Route path="insert-flights" element={<InsertFlight />} />
          <Route path="update-flights" element={<UpdateFlights />} />
          <Route path="search-flights" element={<SearchFlights />} />
          <Route path="search-user" element={<SearchUser />} />
				</Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
