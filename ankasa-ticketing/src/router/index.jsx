import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingDetail from "../pages/booking-detail/booking-detail";
import FlightDetail from "../pages/flight-detail/flight-detail";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Forget from "../pages/forget/forget";
import Mybook from "../pages/mybooking/mybooking";
import SeacrhResult from "../pages/search-result/search-result";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="FlightDetail" element={<FlightDetail />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Forget" element={<Forget />} />
          <Route path="Mybook" element={<Mybook />} />
          <Route path="BookingDetail" element={<BookingDetail />} />
          <Route path="SearchResult" element={<SeacrhResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
