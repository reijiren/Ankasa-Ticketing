import React, { useState, useEffect } from "react";
import "./flight-detail.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../Component/navbar";
import Footer from "../../Component/footer";
import { getDetailFlight } from "../../redux/action/flight";

const FlightDetail = () => {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  //untuk get action
  const dispatch = useDispatch();

  const detailflight = useSelector((state) => {
    return state.flight;
  });

  //get ID from parameter URL
  const { id_flight } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil method "fetchData"
    dispatch(getDetailFlight(id_flight));
  }, []);

  return (
    <section>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}
      <div className="container-fluid container-fluid-flight-detail">
        <div className="background-title">
          <img src={require("../../assets/images/vector 3.png")} />
        </div>
        <div className="container container-main">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-person-details">
                <div className="title-contact-person-details">
                  <h5>Contact Person Details</h5>
                </div>
                <div className="form-contact-person-details">
                  <form>
                    <div className="mb-3 form-group">
                      <label className="mt-4 text-secondary" htmlFor="nama">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={userdata.fullname}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3 form-group">
                      <label className="text-secondary" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={userdata.email}
                        className="form-control"
                        id="email"
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-secondary" htmlFor="alamat">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        defaultValue={userdata.phone}
                        className="form-control"
                        id="phone"
                      />
                    </div>
                  </form>
                </div>
              </div>
              {detailflight.flight.map((data, index) => (
                <div className="passenger-details-one">
                  <div className="title-passenger-details-one">
                    <h5>Passenger Details</h5>
                  </div>
                  <div className="form-passenger-details-one">
                    <form>
                      <div className="passenger">
                        <span> Passenger : 1 Adult</span>
                      </div>
                      <div className="mb-3 form-group">
                        <label className="mt-3 text-secondary" htmlFor="title">
                          Title
                        </label>
                        <div className="mt-2 title">
                          {data.gender === "men" ? (
                            <select name="title" id="title">
                              <option value="Mr.">Mr.</option>
                            </select>
                          ) : data.gender === "women" ? (
                            <select name="title" id="title">
                              <option value="Mrs.">Mrs.</option>
                            </select>
                          ) : (
                            <select name="title" id="title">
                              <option value="Mr.">Mr.</option>
                            </select>
                          )}
                        </div>
                      </div>
                      <div className="mb-3 form-group">
                        <label className="text-secondary" htmlFor="email">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={userdata.fullname}
                          className="form-control"
                          id="email"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-secondary" htmlFor="nationality">
                          Nationality
                        </label>
                        <div className="mt-2 nationality">
                          <select name="nationality" id="nationality">
                            <option value="Indonesia">Indonesia</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Thailand">Thailand</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ))}

              <div className="passenger-details-two">
                <div className="title-passenger-details-two">
                  <h5>Passenger Details</h5>
                </div>
                {detailflight.flight.map((data, index) => (
                  <div className="form-passenger-details-two">
                    <div className="row">
                      <div className="col-auto">
                        {data.insurance === 1 ? (
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name=""
                            checked
                          />
                        ) : (
                          "No"
                        )}
                      </div>
                      <div className="col-auto">
                        <h5>Travel Insurance</h5>
                      </div>
                      <div className="col-auto">
                        <h5>
                          $
                          {data.insurance === 1
                            ? String(((data.price / 15000) * 5) / 100).slice(
                                0,
                                5
                              )
                            : "0"}
                        </h5>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-auto">
                        <span>Get travel compensation up to</span>
                      </div>
                      <div className="col-auto">
                        <span>
                          $
                          {data.insurance === 1
                            ? String((data.price / 15000) * 2).slice(0, 5)
                            : "0"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 button-payment text-center">
                <button>Proceed to Payment</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flight-details">
                <div className="title-flight-details">
                  <div className="row">
                    <div className="col-auto">
                      <h5>Flight Details</h5>
                    </div>
                    <div className="col-auto button-view-detail">
                      <span className="right">Views Details</span>
                    </div>
                  </div>
                </div>
                {detailflight.flight.map((data, index) => (
                  <div className="form-flight-details">
                    <div className="row">
                      <div className="col-auto brand-airplane">
                        <img
                          src={`http://localhost:3001/airline/${data.logo}`}
                        />
                      </div>
                      <div className="col-auto name-airplane">
                        <span className="text-secondary">{data.name}</span>
                      </div>
                    </div>
                    <div className="mt-4 row rute-airplane">
                      <div className="col-auto place-start">
                        <h5>
                          <b>{data.city_departure}</b>
                        </h5>
                      </div>
                      <div className="col-auto icon-airplane">
                        <img src={require("../../assets/images/Vector.png")} />
                      </div>
                      <div className="col-auto place-destination">
                        <h5>
                          <b>{data.city_destination}</b>
                        </h5>
                      </div>
                    </div>
                    <div className="mt-3 row keberangkatan-airplane">
                      <div className="col-auto date-airplane">
                        <span className="text-secondary">
                          {data.date_created}
                        </span>
                      </div>
                      <div className="col-auto icon-airplane-two">
                        <img
                          src={require("../../assets/images/Ellipse 48.png")}
                        />
                      </div>
                      <div className="col-auto clock-airplane">
                        <span className="text-secondary">
                          {String(data.time_departure).slice(0, 5)} -
                          {String(data.time_arrived).slice(0, 5)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 facility">
                      <div className="refundable">
                        <div className="row">
                          <div className="col-auto">
                            {data.refundable === 1 ? (
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name=""
                                checked
                              />
                            ) : (
                              "No"
                            )}
                            <span>Refundable</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 reschedule">
                        <div className="row">
                          <div className="col-auto">
                            {data.reschedule === 1 ? (
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name=""
                                checked
                              />
                            ) : (
                              "No"
                            )}
                            <span>Can Reschedule</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="mt-3 row payment">
                      <div className="col-auto">
                        <h4>Total Payment</h4>
                      </div>
                      <div className="col-auto count-payment">
                        <h4>${String(data.price / 15000).slice(0, 7)}</h4>
                      </div>
                    </div>
                  </div>
                ))}
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

export default FlightDetail;
