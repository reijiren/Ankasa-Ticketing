import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingDetail from "../pages/booking-detail/booking-detail";
import FlightDetail from "../pages/flight-detail/flight-detail";
import Profile from "../pages/profile/Profile";
import SeacrhResult from "../pages/search-result/search-result";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="FlightDetail" element={<FlightDetail />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="BookingDetail" element={<BookingDetail />} />
          <Route path="SearchResult" element={<SeacrhResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
