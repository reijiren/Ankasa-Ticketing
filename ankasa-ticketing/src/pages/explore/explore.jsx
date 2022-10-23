import React from "react";
import "../../assets/style.css";
import Footer from "../../Component/footer";
import Navbar from "../../Component/navbar";

const LandingPage = () => {
  return (
    <div className="body">
      <Navbar />
      <main>
        <section className="container-fluid">
          <div className="row">
            <div className="col-md-6 my-5">
              <div className="col-md-12 d-flex justify-content-center flex-column mt-5 ms-5 p-5">
                <h1 className="fw-bold">
                  Find your <span className="textFlight">Flight</span>
                </h1>
                <p className="text-muted mt-2">and explore the world with us</p>
              </div>
              <div className="col-md-12 text-start">
                <img 
                //  src="image 4.png"
                    src={require("../../assets/images/image 4.png")}
                 className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 text-end mt-2">
                <img
                //  src="image 5.png"
                    src={require("../../assets/images/image 5.png")}
                 className="img-fluid" alt="" />
              </div>
              <div className="col-md-12 text-end">
                <img
                //   src="vector 6.png"
                    src={require("../../assets/images/vector 6.png")}
                  className="img-fluid customImageBubble"
                  width="180"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid">
          <h5>TRENDING</h5>
          <h2>Trending Destinations</h2>
          <div className="row">
            <div className="col-md-2">
              <div className="card">
                <img src="image 6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Jakarta</h5>
                  <p className="card-text">
                    Jakarta is the capital and largest city of Indonesia,
                    located on the northwest of the island of Java.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <img src="image 7.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bali</h5>
                  <p className="card-text">
                    Bali is an island and province of Indonesia. The province
                    includes the island of Bali and a few smaller neighbouring
                    islands.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <img src="image 8.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Surabaya</h5>
                  <p className="card-text">
                    Surabaya is the second-largest city in Indonesia after
                    Jakarta and the capital of East Java.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <img src="image 9.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bandung</h5>
                  <p className="card-text">
                    Bandung is the capital of West Java province in Indonesia.
                    Located approximately 180 km southeast of Jakarta.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <img src="image 10.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Yogyakarta</h5>
                  <p className="card-text">
                    Yogyakarta is a city on the island of Java, Indonesia. It is
                    the capital of the Special Region of Yogyakarta.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid p-5">
          <div className="py-5 bgImage">
            <div className="container-fluid bgImage">
              <div className="row justify-content-center mb-4">
                <div className="col-md-8 text-center">
                  <p className="mb-3">TOP 10</p>
                  <h2 className="">Top Destinations</h2>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-2 mb-4 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        // src="jakarta.png"
                        src={require("../../assets/images/jakarta.png")}
                        alt="wrapkit"
                        className="img-fluid rounded-circle"
                      />
                      <h5 className="mt-4 text-center">Mr Farid</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 mb-4 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        // src="jambi.png"
                        src={require("../../assets/images/jambi.png")}
                        alt="wrapkit"
                        className="img-fluid rounded-circle"
                      />
                      <h5 className="mt-4 text-center">Mr Tofa</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 mb-4 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        // src="bali.png"
                        src={require("../../assets/images/bali.png")}
                        alt="wrapkit"
                        className="img-fluid rounded-circle"
                      />
                      <h5 className="mt-4 text-center">Michael Doe</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 mb-4 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        // src="singapore.png"
                        src={require("../../assets/images/singapore.png")}
                        alt="wrapkit"
                        className="img-fluid rounded-circle"
                      />
                      <h5 className="mt-4 text-center">Michael Doe</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 mb-4 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        // src="padang.png"
                        src={require("../../assets/images/padang.png")}
                        alt="wrapkit"
                        className="img-fluid rounded-circle"
                      />
                      <h5 className="mt-4 text-center">Michael Doe</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-md-8 text-center">
                <nav aria-label="Page navigation example">
                  <button type="button" className="btn infoBack mx-3">
                    <i className="fa fa-angle-left wArrow"></i>
                  </button>
                  <button type="button" className="btn infoNext mx-3">
                    <i className="fa fa-angle-right wArrow"></i>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default LandingPage;
