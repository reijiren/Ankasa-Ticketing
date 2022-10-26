import React from "react";
import "../assets/style.css";
import { Link } from "react-router-dom";

const NavbarSign = () => {
  return (
    <>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-white fixed-top">
          <Link class="navbar-brand ms-10" to="/">
            <img
              src={require("../assets/images/vector 02.png")}
              width="30"
              alt=""
            />
            Ankasa
          </Link>
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
                  placeholder="where you want to go?"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </form>
            <div class="navbar-nav me-5 mx-5">
              {/* <a
                class="nav-link active mx-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
                href="#"
                aria-current="page"
              >
                Find Ticket
              </a> */}
              <Link
                className="nav-link active mx-5"
                aria-current="page"
                to="search-result"
              >
                Find Ticket
              </Link>
              <Link
                class="nav-link active mx-5"
                aria-current="page"
                to="/mybook"
              >
                My Booking
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  class="btn btn-primary shadow-lg bgBlue rounded mx-5"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default NavbarSign;
