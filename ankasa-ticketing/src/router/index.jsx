import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlightDetail from "../pages/flight-detail/flight-detail";
import Profile from "../pages/profile/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="FlightDetail" element={<FlightDetail />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
