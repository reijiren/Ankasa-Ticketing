import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
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
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

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
          <Route path="flight-detail" element={<FlightDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget" element={<Forget />} />
          <Route path="mybook" element={<Mybook />} />
          <Route path="booking-detail" element={<BookingDetail />} />
          <Route path="search-result" element={<SeacrhResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
