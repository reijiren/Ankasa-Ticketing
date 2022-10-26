import React from "react";
import "../assets/style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <Link className="navbar-brand ms-10" to="/">
            <img
              src={require("../assets/images/vector 02.png")}
              width="30"
              alt="logo"
            />
            Ankasa
          </Link>
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
                  placeholder="where you go?"
                  aria-label="Search"
                />
                <span className="input-group-text" id="basic-addon2">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </form>
            <div className="navbar-nav me-5 mx-5">
              <Link
                className="nav-link active mx-5"
                aria-current="page"
                to="/search-result"
              >
                Find Ticket
              </Link>
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
                  <img
                    src={require("../assets/images/Group 797.png")}
                    width="20"
                    alt=""
                    class="mx-4"
                  />
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
