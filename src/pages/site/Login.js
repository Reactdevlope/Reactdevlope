import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from './Footer';

function Signin(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const onClick = (data) => {
    console.log(data);
  };

  return (

    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
          <img src='./assets/img/atbeloved.png' className="img-fluid mt-3 mb-5" alt="logo" />
        </div>
      </div>

      <div className="row ">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <form>
            <div className="row mt-5">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-center">
                <h4>Create an account</h4>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <Link to="#" className="atb-border">
                  <img
                    className="iconify px-4"
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                  />
                  Continue with Google
                </Link>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <Link to="#" className="atb-border">
                  <img
                    className="iconify px-4"
                    src="https://img.icons8.com/color/48/000000/facebook.png"
                  />
                  Continue with Facebook
                </Link>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <h4>or</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <input
                  type="text"
                  className="atb-border ps-2"
                  placeholder="Email"
                  {...register("loginEmail", {
                    required: "Please enter email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Enter valid email",
                    },
                  })}
                />
              </div>
            </div>

            <div className="row mt-3 mb-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn z-depth-1a"
                  id="atb-login"
                  onClick={handleSubmit(onClick)}
                >
                  Create an account
                </button>
              </div>
            </div>

            <div className="row mt-4 mb-5">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6 d-flex justify-content-center">
                <p className="atb-login-paragraph">
                  By creating an account,indicates that you have read and agree
                  to Termsof Services and Privicy Policy.
                </p>
              </div>
            </div>
          </form>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 atb-vertical">
          <form>
            <div className="row mt-5">
              <div className="col-sm-12 col-md-12 col-lg-12  col-xl-12 col-xxl-12  d-flex justify-content-center">
                <h4>Already have account</h4>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <input
                  type="text"
                  className="atb-border ps-2"
                  placeholder="Email"
                  {...register2("loginEmail", {
                    required: "Please enter email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Enter valid email",
                    },
                  })}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className=" col-8 col-sm-6 col-md-4 col-lg-8 col-xl-6 col-xxl-6">
                {errors2.loginEmail && (
                  <span style={{ color: "red" }}>
                    {errors2.loginEmail.message}
                  </span>
                )}
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <input
                  type="password"
                  className="atb-border ps-2"
                  placeholder="Password"
                  {...register2("password", {
                    required: "Please enter password",
                    minLength: { value: 8, message: "At least 8 digit" },
                    maxLength: { value: 10, message: "Enter max 10 digit" },
                  })}
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className=" col-8 col-sm-6 col-md-4 col-lg-8 col-xl-6 col-xxl-6  ">
                {errors2.password && (
                  <span style={{ color: "red" }}>
                    {errors2.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className="row mt-2  ">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <Link to="#" id="atb-forgot-password">
                  Forgot Password
                </Link>
              </div>
            </div>

            <div className="row mt-3 mb-5">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn me-4"
                  id="atb-login"
                  onClick={handleSubmit2(onClick)}
                >
                  Log In to your account
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>

      {/* <Footer/> */}
      <Footer />
    </div>

  );
}
export default Signin;
