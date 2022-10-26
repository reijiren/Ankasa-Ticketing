import React from "react";
import { useSelector } from "react-redux";
import "../assets/style.css";
// import { Link } from "react-router-dom";

const Profiles = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="col-md-3 p-5 bg-white m-2 customBorderProfile">
        <div className="row text-center">
          <div className="col-md-12 my-2">
            <img
              src={`http://localhost:3001/profile_pic/${user.thisUser.map((data) => data.photo)}`}
              width="100"
              alt=""
              className="mx-auto d-block rounded-circle customBorder"
            />
          </div>
          <div className="col-md-12 my-2">
            <button className="btn btn-outline-primary">Select Photo</button>
          </div>
          <div className="col-md-12">
            <h3 className="text-center">{user.thisUser.map((data) => data.fullname)}</h3>
            <p className="text-muted">{user.thisUser.map((data) => data.city)} Indonesia</p>
          </div>
          <div className="col-md-12">
            <div className="row">
              <p className="col-md-6 text-start customTitleCard">Cards</p>
              <p className="col-md-6 text-end blue" id="add">
                +add
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card bgBlue text-white">
              <div className="card-body">
                <div className="row">
                  <p>{user.thisUser.map((data) => data.credit_card ? data.credit_card : "-")}</p>
                  <div className="col-md-6 text-start">
                    <p>X Card</p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p>$ {user.thisUser.map((data) => data.balance ? data.balance : "-")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-3 ms-4">
            <div className="row text-start">
              <div className="col-md-12 text-bold my-1">
                <p>
                  <i className="fa fa-user blue"> Profile</i>
                </p>
              </div>
              <div className="col-md-12 text-bold my-1">
                <p>
                  <i className="fa fa-star"> My Review</i>
                </p>
              </div>
              <div className="col-md-12 text-bold my-1">
                <p>
                  <i className="fa fa-cog"> Setting</i>
                </p>
              </div>
              <div className="col-md-12 text-bold my-1">
                <p>
                  <i className="fa fa-sign-out text-danger"> Logout</i>
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
