import React from "react";
import "../assets/style.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-white fixed-top">
          <a class="navbar-brand ms-10" href="#">
            <img
              src={require("../assets/images/vector 02.png")}
              width="30"
              alt=""
            />
            Ankasa
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <form class="d-flex mx-5" role="search">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </form>
            <div class="navbar-nav me-5 mx-5">
              <a class="nav-link active mx-5" aria-current="page" href="#">
                Find Ticket
              </a>
              <a class="nav-link active mx-5" aria-current="page" href="#">
                My Booking
              </a>
              <div class="dropdown">
                <a
                  class="nav-link active mx-5"
                  aria-current="page"
                  href="#"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={require("../assets/images/Group 797.png")} width="20" alt="" class="mx-4" />
                  <img
                    src={require("../assets/images/btnNotifications.png")}
                    width="20"
                    alt=""
                    class="mx-2"
                  />
                </a>
              </div>
              <a href="#">
                <img
                  src={require("../assets/images/nnzkZNYWHaU.png")}
                  width="40"
                  class="mobileProfileNavbar rounded-circle customBorder"
                  alt="profile image"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
