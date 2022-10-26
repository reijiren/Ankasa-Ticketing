import React, { useEffect } from "react";
import "../mybooking/mybooking.css";
import Footer from "../../Component/footer";
import Navbar from "../../Component/navbar";
import Profiles from "../../Component/profile";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { myBooking } from "../../redux/action/booking";
import { getDetailFlight } from "../../redux/action/flight";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Mybook = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state)=>state.booking)

const user = useSelector((state)=>state.user)
const flight = useSelector((state)=>state.flight)
const id = user.thisUser.map((data) => data.id_user) 
  useEffect(()=>{
    const handleSuccess = (data) => {
     
    }
    dispatch (myBooking(id, handleSuccess))
  }, [])


  return (
    <>
      <Navbar />
      <main class="bg-light">
        <section class="container-fluid p-5 customMainBooking">
          <div class="row">
            <Profiles />
            <div className="col-lg-8 p-0">
              <div class="col-md-12 p-5 pt-4 pe-5 bg-white mt-3 ms-2 customBorderBooking">
                <h5 class="blue my-booking">MY BOOKING</h5>
                <h3 class="mb-1 my-booking2">My Booking</h3>
                <h6 class="order-history">Order History</h6>
              </div>
              {booking.isLoading? (
                <h1>Loading</h1>
              ): booking.booking == "" ? (
                <h1>Data is not found</h1>
              ): (
                
                booking.booking.map((data, index) => (
                  <div
                  key={index}
                  class="col-md-12 p-5 bg-white mt-4 ms-2 customBorderBooking2"
                  >
                <h5 class="date">Monday, 20 July ‘20 - {String(data.time_departure).slice(0, 5)}</h5>
                <div class="d-flex align-items-start mt-2">
                  <h3 class="pe-4">{data.region_departure}</h3>
                  <img
                    class="pe-4 mt-2"
                    src={require("../../assets/images/Vector.png")}
                    alt=""
                  />
                  <h3 class="pe-4">{data.region_destination}</h3>
                </div>
                <p>{}, {data.id_flight}</p>
                <hr class="w-100" />
                <div class="d-flex align-items-end mt-2">
                  <p class="pe-4 mt-2 status">Status</p>
                  {data.status===0 ? (
                    <button class="btn-custom btn-disabled color-status2">Waiting for payment</button>
                  ): (
                    <button class="btn-custom btn-disabled color-status1">Eticked issued</button>
                  )}
                  <div class="details"><Link to={`/booking-detail/${data.id_booking}`}>View Details</Link></div>
                </div>
                
              </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Mybook;
