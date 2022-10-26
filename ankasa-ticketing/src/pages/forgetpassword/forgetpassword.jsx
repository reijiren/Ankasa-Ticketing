import React from "react";
import "../login/login.css";

const Forget = () => {
  return (
    <section>
        <div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-7 col-md-7 d-none d-md-block image-container" />
      <div className="col-lg-5 col-md-5 form-container">
        <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-start">
          <div className="logo">
            <img src={require("../../assets/images/Group 29.png")} width="150px" alt />
          </div>
          <div className="heading">
            <h1 className="fw-bold">Forget Password</h1>
          </div>
          <form>
            <div className="form-input">
              <input type="password" name="password" id="password" placeholder="New Password" required />
            </div>
            <div className="form-input">
              <input type="password" name="password2" id="password2" placeholder="Confirm New Password" required />
            </div>
            <div className="text-left mb-3">
              <button type="submit" className="custom-btn">Sign in</button>
            </div>
            <div className="text-center mt-2">
              <p>You’ll get message soon on your email</p><p>
              </p></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Forget;
