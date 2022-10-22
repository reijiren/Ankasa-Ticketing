import React from "react";
import "../../assets/style.css";
import Footer from "../../Component/footer";
import Navbar from "../../Component/navbar";
// import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Navbar />
      <main class="bg-light">
        <section class="container-fluid p-5 customMainProfile">
          <div class="row">
            <div class="col-md-3 p-5 bg-white m-2 customBorderProfile">
              <div class="row text-center">
                <div class="col-md-12 my-2">
                  <img
                    src={require("../../assets/images/nnzkZNYWHaU.png")}
                    width="100"
                    alt=""
                    class="mx-auto d-block rounded-circle customBorder"
                  />
                </div>
                <div class="col-md-12 my-2">
                  <button class="btn btn-outline-primary">Select Photo</button>
                </div>
                <div class="col-md-12">
                  <h3 class="text-center">John Doe</h3>
                  <p class="text-muted">Medan, Indonesia</p>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <p class="col-md-6 text-start customTitleCard">Cards</p>
                    <p class="col-md-6 text-end blue" id="add">
                      +add
                    </p>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="card bgBlue text-white">
                    <div class="card-body">
                      <div class="row">
                        <p>4441 1235 5512 5551</p>
                        <div class="col-md-6 text-start">
                          <p>X Card</p>
                        </div>
                        <div class="col-md-6 text-end">
                          <p>$ 100</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 p-3 ms-4">
                  <div class="row text-start">
                    <div class="col-md-12 text-bold my-1">
                      <p>
                        <i class="fa fa-user blue"> Profile</i>
                      </p>
                    </div>
                    <div class="col-md-12 text-bold my-1">
                      <p>
                        <i class="fa fa-star"> My Review</i>
                      </p>
                    </div>
                    <div class="col-md-12 text-bold my-1">
                      <p>
                        <i class="fa fa-cog"> Setting</i>
                      </p>
                    </div>
                    <div class="col-md-12 text-bold my-1">
                      <p>
                        <i class="fa fa-sign-out text-danger"> Logout</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8 bg-warning p-5 bg-white m-2 customBorderProfile">
              <h5 class="blue">PROFILE</h5>
              <h3 class="mb-5">Profile</h3>
              <div class="row">
                <div class="col-md-6">
                  <h5 class="mb-4">Contact</h5>
                  <div>
                    <label for="inputEmail" class="form-label text-muted">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control customBorderInput"
                      id="inputEmail"
                      placeholder="email@gmail.com"
                      value="jon@gmail.com"
                    />
                    <hr />
                  </div>
                  <div>
                    <label for="inputPhone" class="form-label text-muted">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      class="form-control customBorderInput"
                      id="inputPhone"
                      placeholder="08123456789"
                      value="08123456789"
                    />
                    <hr />
                  </div>
                  <div class="col-md-12 blue text-end">
                    <h6>
                      Account Setting <i class="fa fa-arrow-right"></i>
                    </h6>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="mb-4">Biodata</h5>
                  <div>
                    <label for="inputUsername" class="form-label text-muted">
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control customBorderInput"
                      id="inputUsername"
                      placeholder="John Doe"
                      value="John Doe"
                    />
                    <hr />
                  </div>
                  <div>
                    <label for="inputCity" class="form-label text-muted">
                      City
                    </label>
                    <div class="col-md-6 w-100">
                      <select
                        class="form-select customBorderInput"
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
                    <label for="inputAddress" class="form-label text-muted">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control customBorderInput"
                      id="inputAddress"
                      placeholder="Jl. Sisingamangaraja No. 45"
                      value="Jl. Sisingamangaraja No. 45"
                    />
                    <hr />
                  </div>
                  <div>
                    <label for="inputPostCode" class="form-label text-muted">
                      Pos Code
                    </label>
                    <input
                      type="text"
                      class="form-control customBorderInput"
                      id="inputPostCode"
                      placeholder="21***"
                      value="20212"
                    />
                    <hr />
                  </div>
                </div>
                <div class="col-md-12 text-end mt-3">
                  <button class="btn btn-primary bgBlue">Save</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Profile;
