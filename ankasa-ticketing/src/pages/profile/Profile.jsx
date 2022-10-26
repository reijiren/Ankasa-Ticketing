import React, { useState, useEffect } from "react";
import "../../assets/style.css";
import Footer from "../../Component/footer";
import Navbar from "../../Component/navbar";
import Profiles from "../../Component/profile";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/action/user";
// import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
    const handleSuccess = (data) => {};
    dispatch(getUser(data.id_user, handleSuccess));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
  };
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
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="mb-4">Contact</h5>
                    <div>
                      <label
                        htmlFor="inputEmail"
                        className="form-label text-muted"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control customBorderInput"
                        id="inputEmail"
                        placeholder="email@gmail.com"
                        name="email"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : user.thisUser.map((data) => {
                                return data.email;
                              })
                        }
                      />
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputPhone"
                        className="form-label text-muted"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputPhone"
                        placeholder="+62"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : user.thisUser.map((data) => {
                                return data.phone;
                              })
                        }
                      />
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputCard"
                        className="form-label text-muted"
                      >
                        Credit Card
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputCard"
                        placeholder="1234 5678 9012 3456"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : user.thisUser.map((data) => {
                              return data.credit_card;
                            })
                        }
                      />
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputBalance"
                        className="form-label text-muted"
                      >
                        Balance
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputBalance"
                        placeholder="Rp. 0"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : user.thisUser.map((data) => {
                              return data.balance;
                            })
                        }
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
                      <label
                        htmlFor="inputUsername"
                        className="form-label text-muted"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputUsername"
                        placeholder="John Doe"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : user.thisUser.map((data) => {
                                return data.username;
                              })
                        }
                      />
                      <hr />
                    </div>

                    <div>
                      <label
                        htmlFor="inputFullname"
                        className="form-label text-muted"
                      >
                        Fullname
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputFullname"
                        placeholder="John Doe"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : user.thisUser.map((data) => {
                                return data.fullname;
                              })
                        }
                      />
                      <hr />
                    </div>

                    <div>
                      <label
                        htmlFor="inputCity"
                        className="form-label text-muted"
                      >
                        City
                      </label>
                      <div className="col-md-6 w-100">
                        <input
                          type="text"
                          className="form-control customBorderInput"
                          id="inputCity"
                          placeholder="Medan"
                          defaultValue={
                            user.isLoading
                              ? "Loading..."
                              : user.thisUser.map((data) => {
                                return data.city;
                              })
                          }
                        />
                      </div>
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputAddress"
                        className="form-label text-muted"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputAddress"
                        placeholder="Jl. Sisingamangaraja No. 45"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : user.thisUser.map((data) => {
                              return data.address;
                            })
                        }
                      />
                      <hr />
                    </div>
                    <div>
                      <label
                        htmlFor="inputPostCode"
                        className="form-label text-muted"
                      >
                        Pos Code
                      </label>
                      <input
                        type="text"
                        className="form-control customBorderInput"
                        id="inputPostCode"
                        placeholder="21***"
                        defaultValue={
                          user.isLoading
                            ? "Loading..."
                            : user.thisUser.map((data) => {
                              return data.post_code;
                            })
                        }
                      />
                      <hr />
                    </div>
                  </div>
                  <div className="col-md-12 text-end mt-3">
                    <button className="btn btn-primary bgBlue">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Profile;
