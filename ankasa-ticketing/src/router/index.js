import React from "react";
import FlightDetail from "../pages/flight-detail/flight-detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                <Route path="FlightDetail" element={<FlightDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )   
}

export default Router;