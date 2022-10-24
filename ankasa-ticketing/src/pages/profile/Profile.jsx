import React from "react";
import "../../assets/style.css";
import Footer from "../../Component/footer";
import Navbar from "../../Component/navbar";
import Profiles from "../../Component/profile";
// import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="body">
      <Navbar />
      <main className="bg-light">
        <section className="container-fluid p-5 customMainProfile">
          <div className="row">
            <Profiles />
            <div className="col-md-8 bg-warning p-5 bg-white m-2 customBorderProfile">
              <h5 className="blue">PROFILE</h5>
              <h3 className="mb-5">Profile</h3>
              <div className="row">
                <div className="col-md-6">
                  <h5 className="mb-4">Contact</h5>
                  <div>
                    <label for="inputEmail" className="form-label text-muted">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control customBorderInput"
                      id="inputEmail"
                      placeholder="email@gmail.com"
                      value="jon@gmail.com"
                    />
                    <hr />
                  </div>
                  <div>
                    <label for="inputPhone" className="form-label text-muted">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control customBorderInput"
                      id="inputPhone"
                      placeholder="08123456789"
                      value="08123456789"
                    />
                    <hr />
                  </div>
                  <div className="col-md-12 blue text-end">
                    <h6>
                      Account Setting <i className="fa fa-arrow-right"></i>
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5 className="mb-4">Biodata</h5>
                  <div>
                    <label for="inputUsername" className="form-label text-muted">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control customBorderInput"
                      id="inputUsername"
                      placeholder="John Doe"
                      value="John Doe"
                    />
                    <hr />
                  </div>
                  <div>
                    <label for="inputCity" className="form-label text-muted">
                      City
                    </label>
                    <div className="col-md-6 w-100">
                      <select
                        className="form-select customBorderInput"
                        id="inputCity"
                      >
                        <option selected>Medan</option>
                        <option value="1">Jakarta</option>
                        <option value="2">Bandung</option>
                        <option value="3">Surabaya</option>
                      </select>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <label for="inputAddress" className="form-label text-muted">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control customBorderInput"
                      id="inputAddress"
                      placeholder="Jl. Sisingamangaraja No. 45"
                      value="Jl. Sisingamangaraja No. 45"
                    />
                    <hr />
                  </div>
                  <div>
                    <label for="inputPostCode" className="form-label text-muted">
                      Pos Code
                    </label>
                    <input
                      type="text"
                      className="form-control customBorderInput"
                      id="inputPostCode"
                      placeholder="21***"
                      value="20212"
                    />
                    <hr />
                  </div>
                </div>
                <div className="col-md-12 text-end mt-3">
                  <button className="btn btn-primary bgBlue">Save</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Profile;
