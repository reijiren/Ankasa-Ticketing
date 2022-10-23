import React from "react";
import "../assets/style.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <a className="navbar-brand ms-10" href="#">
            <img
              src={require("../assets/images/vector 02.png")}
              width="30"
              alt=""
            />
            Ankasa
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <form className="d-flex mx-5" role="search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </form>
            <div className="navbar-nav me-5 mx-5">
              <a className="nav-link active mx-5" aria-current="page" href="#">
                Find Ticket
              </a>
              <a className="nav-link active mx-5" aria-current="page" href="#">
                My Booking
              </a>
              <div className="dropdown">
                <a
                  className="nav-link active mx-5"
                  aria-current="page"
                  href="#"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={require("../assets/images/Group 797.png")} width="20" alt="" className="mx-4" />
                  <img
                    src={require("../assets/images/btnNotifications.png")}
                    width="20"
                    alt=""
                    className="mx-2"
                  />
                </a>
              </div>
              <a href="#">
                <img
                  src={require("../assets/images/nnzkZNYWHaU.png")}
                  width="40"
                  className="mobileProfileNavbar rounded-circle customBorder"
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
