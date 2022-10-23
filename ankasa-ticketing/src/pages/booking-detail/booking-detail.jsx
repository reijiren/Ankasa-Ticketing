import React from "react";
import "./booking-detail.css";
import Navbar from "../../Component/navbar";
import Footer from "../../Component/footer";

const BookingDetail = () => {
  return (
    <section>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}
      <div className="container-fluid container-fluid-booking-detail">
        <div className="container container-booking-detail">
          <div className="ticket-flight">
            <div className="row">
              <div className="col-auto">
                <h4>Booking Pass</h4>
              </div>
              <div className="col-auto titik-tiga">
                <img src={require("../../assets/images/Ellipse 5.png")} />
                <img src={require("../../assets/images/Ellipse 5.png")} />
                <img src={require("../../assets/images/Ellipse 5.png")} />
              </div>
            </div>
            <div className="mt-4 container ticket-flight-main">
              <div className="row">
                <div className="col-md-9 ticket-flight-main-left-border">
                  <div className="ticket-flight-main-left">
                    <div className="row">
                      <div className="col-auto">
                        <img
                          src={require("../../assets/images/garuda-indonesia-logo-BD82882F07-seeklogo 1.png")}
                        />
                      </div>
                      <div className="pt-3 col-auto">
                        <h3>IDN</h3>
                      </div>
                      <div className="pt-3 col-auto">
                        <img src={require("../../assets/images/Vector.png")} />
                      </div>
                      <div className="pt-3 col-auto">
                        <h3>JPN</h3>
                      </div>
                    </div>
                    <div className="mt-3 row">
                      <div className="col-auto">
                        <span className="text-secondary">Code</span>
                        <h6 className="text-secondary">AB-221</h6>
                      </div>
                      <div className="col-auto">
                        <span className="text-secondary">Class</span>
                        <h6 className="text-secondary">Economy</h6>
                      </div>
                    </div>
                    <div className="mt-3 row">
                      <div className="col-auto">
                        <span className="text-secondary">Terminal</span>
                        <h6 className="text-secondary">A</h6>
                      </div>
                      <div className="col-auto">
                        <span className="text-secondary">Gate</span>
                        <h6 className="text-secondary">221</h6>
                      </div>
                    </div>
                    <div className="mt-3 row">
                      <div className="col-auto">
                        <span className="text-secondary">Departure</span>
                        <h6 className="text-secondary">
                          Monday, 20 July '20 - 12:33
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ticket-flight-main-right-border">
                  <div className="ticket-flight-main-right text-center">
                    <img src={require("../../assets/images/QR Code 1.png")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </section>
  );
};

export default BookingDetail;
