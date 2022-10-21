import React from "react";
import "../assets/style.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="fixed-bottom bg-light">
        <div class="container-fluid p-4 px-5 mobileOuterFooter">
          <div class="row p-5 mobileInnerFooter">
            <div class="col-md-3">
              <h4 class="">
                <img src={require("../assets/images/vector 02.png")} width="30" alt="" />
                Ankasa
              </h4>
              <p class="mt-3 ms-3 text-muted">
                Find your Flight and explore the world with us. We will take
                care of the rest
              </p>
            </div>
            <div class="col-md-3">
              <h5 class="ms-4">Features</h5>
              <ul class="listStyle">
                <li class="py-1">
                  <a href="#">Find Ticket</a>
                </li>
                <li class="py-1">
                  <a href="#">My Booking</a>
                </li>
                <li class="py-1">
                  <a href="#">Chat</a>
                </li>
                <li class="py-1">
                  <a href="#">Notification</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5 class="ms-2">Download Angkasa App</h5>
              <ul class="listStyle">
                <a href="#" class="imgFooter">
                  <img
                    src={require("../assets/images/apple-app-store-travel-awards-globestamp-7 2.png")}
                    alt=""
                    class="mb-3"
                  />
                </a>
                <a href="#" class="imgFooter">
                  <img
                    src={require("../assets/images/apple-app-store-travel-awards-globestamp-7 3.png")}
                    alt=""
                  />
                </a>
              </ul>
            </div>
            <div class="col-md-3">
              <h5 class="ms-4">Follow Us</h5>
              <ul class="listStyle d-flex flex-row">
                <li class="pe-2">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="px-2">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="px-2">
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li class="px-2">
                  <a href="#">
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-down px-5">
            <div class="container">
              <div class="row text-muted">
                <div class="col-12 col-md-6">
                  <p>© 2022 Company, Inc. All rights reserved.</p>
                </div>
                <div class="col-12 col-md-6">
                  <p class="text-end mx-5">
                    <i class="fa fa-map-marker"></i>
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
