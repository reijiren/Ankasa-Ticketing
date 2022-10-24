import React from "react";
import "../../assets/style.css";
import Footer from "../../Component/footer";
import Navbar from "../../Component/navbarSign";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LandingPage = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1666213233530-1891c515baf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      label: 15,
      location: {
        city: "Barcelona",
        country: "Spain",
      },
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1666112567387-6eb27bd3ecba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80",
      label: 15,
      location: {
        city: "Istana Negara",
        country: "Wakanda",
      },
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1665837231807-fcc190001ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80",
      label: 15,
      location: {
        city: "Barcelona",
        country: "Spain",
      },
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1659719852548-4f097c37d448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      label: 15,
      location: {
        city: "Barcelona",
        country: "Spain",
      },
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1666213233530-1891c515baf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      label: 15,
      location: {
        city: "Barcelona",
        country: "Spain",
      },
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1666213233530-1891c515baf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      label: 15,
      location: {
        city: "Barcelona",
        country: "Spain",
      },
    },
  ];
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
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 text-end mt-2">
                <img
                  //  src="image 5.png"
                  src={require("../../assets/images/image 5.png")}
                  className="img-fluid cusImg"
                  alt=""
                />
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
              <div className="customCollapseView">
                <div
                  class="collapse collapse-vertical"
                  id="collapseWidthExample"
                >
                  <div class="card card-body customCard">
                    <div className="col-md-12">
                      <p>Hey</p>
                      <h6>where you want to go?</h6>
                      <div className="row">
                        <div className="col-md-8 text-start">
                          <p>recently searched</p>
                        </div>
                        <div className="col-md-4 text-end">
                          <i className="fa fa-angle-right"></i>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <p>from</p>
                        </div>
                        {/* <div className="col-md-4">
                            </div> */}
                        <div className="col-md-6 text-end">
                          <p>to</p>
                        </div>
                        <div className="col-md-4 text-start">
                          <h5>Medan</h5>
                        </div>
                        <div className="col-md-4 text-center">
                          <div className="row">
                            <div className="col-md-12">
                              <i className="fa fa-arrow-right"></i>
                            </div>
                            <div className="col-md-12">
                              <i className="fa fa-arrow-left"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-end">
                          <h5>Tokyo</h5>
                        </div>
                        <div className="col-md-12">
                          <div className="row text-center">
                            <div className="col-md-6">
                              <button type="button" className="btn btn-primary">
                                one way
                              </button>
                            </div>
                            <div className="col-md-6">
                              <button type="button" className="btn btn-danger">
                                Round trip
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div>
                            <label
                              for="inputDeparture"
                              className="form-label text-muted"
                            >
                              Departure
                            </label>
                            <input
                              type="text"
                              className="form-control customBorderInput"
                              id="inputDeparture"
                              placeholder="Medan"
                              value="Medan"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <label
                            for="inputDeparture"
                            className="form-label text-muted"
                          >
                            How many person?
                          </label>
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control customBorderInput"
                                id="input"
                                placeholder="Child"
                                value="2"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="number"
                                className="form-control customBorderInput"
                                id="inputDeparture"
                                placeholder="Adult"
                                value="4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="trending" className="flex-col">
          <div className="flex-row px-5">
            <div className="flex-col gap-small flex-auto">
              <h5 className="blue">TRENDING</h5>
              <h2 className="fw-bold mb-3">Trending Destinations</h2>
            </div>
            {/* <div>
            <button className="whitespace-nowrap">View All</button>
          </div> */}
          </div>
          {data.length > 0 ? (
            <div className="customSpace">
              <Swiper
                spaceBetween={30}
                slidesOffsetBefore={10}
                slidesOffsetAfter={10}
                breakpoints={{
                  100: {
                    slidesPerView: 1.5, // tampilkan sedikit preview dari card sebelum dan sesudahnya
                  },
                  400: {
                    slidesPerView: 2.1,
                  },
                  768: {
                    slidesPerView: 3.1,
                  },
                  1024: {
                    slidesPerView: 4, // tampilkan list card tanpa preview sebelum dan sesudahnya
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
              >
                {data.map((data) => (
                  <SwiperSlide key={data.id}>
                    <div className="cardSlider">
                      <div className="cardOverlay" />
                      <div className="cardImage">
                        <img src={data.img} alt="" className="" />
                      </div>
                      <div className="cardLabel">{data.label} Airlines</div>
                      <div className="cardDescription flexRow">
                        <div className="flexCol flexAuto">
                          <p>{data.location.city},</p>
                          <h4>{data.location.country}</h4>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="customButton"
                            onClick={() => console.log(data.location.city)}
                          >
                            <i className="fa fa-angle-right wArrow"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div>No Data Available</div>
          )}
        </section>
        <section className="container-fluid p-5">
          <div className="py-5 bgImage text-white">
            <div className="container-fluid bgImage">
              <div className="row justify-content-center mb-4">
                <div className="col-md-8 text-center">
                  <p className="mb-3">TOP 10</p>
                  <h2 className="">Top Destinations</h2>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                {data.length > 0 ? (
                  <div className="">
                    <Swiper
                      spaceBetween={10}
                      slidesOffsetBefore={10}
                      slidesOffsetAfter={10}
                      breakpoints={{
                        100: {
                            slidesPerView: 1.5, // tampilkan sedikit preview dari card sebelum dan sesudahnya
                          },
                          400: {
                            slidesPerView: 2.1,
                          },
                          768: {
                            slidesPerView: 3.1,
                          },
                          1024: {
                            slidesPerView: 4, // tampilkan list card tanpa preview sebelum dan sesudahnya
                          },
                          1280: {
                            slidesPerView: 5,
                        },
                      }}
                      onSlideChange={() => console.log("slide change")}
                    >
                      {data.map((data) => (
                        <div className="">
                          <SwiperSlide key={data.id}>
                            <div className="col-lg-2 spaceCust p-5 mb-4 d-flex justify-content-center">
                              <div className="row">
                                <div className="col-md-12">
                                  <img
                                    // src="jakarta.png"
                                    src={data.img}
                                    alt="wrapkit"
                                    className="imgCustom rounded-circle"
                                  />
                                  <h5 className="mt-4 text-center">
                                    {data.location.city}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </div>
                      ))}
                    </Swiper>
                  </div>
                ) : (
                  <div>No Data Available</div>
                )}
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