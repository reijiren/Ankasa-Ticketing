import React from "react";
import "../assets/style.css";
// import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <>
      <div class="col-md-3 p-5 bg-white m-2 customBorderProfile">
        <div class="row text-center">
          <div class="col-md-12 my-2">
            <img
              src={require("../assets/images/nnzkZNYWHaU.png")}
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
    </>
  );
};
export default Profiles;
