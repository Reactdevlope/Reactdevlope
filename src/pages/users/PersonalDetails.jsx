import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../site/Footer";


export default function PersonalDetails(props) {
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isDirty },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container-fluid">

      <div className='row mt-4 mb-5 justify-content-center'>
        <div className='col-6 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3'>
          <img src='./assets/img/atbeloved.png' alt="Logo" className='img-fluid' />
        </div>
      </div>

      <h4 className="atb-login-text text-center">
        FOR FIRST TIME LOGIN YOU NEED TO TELL ABOUT YOURSELF
      </h4>

      <div className="my-3 mb-5">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xxl-4">
            <div className="card">
              <div className="mx-4 my-4">
                <h4 className="atb-personal mx-2">PERSONAL DETAILS</h4>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group mt-4">
                    <input
                      {...register("name", {
                        required: "Please enter your name",
                        pattern: {
                          value: /^[a-zA-Z ]*$/,
                          message: "Please enter character only",
                        },
                      })}
                      type="text"
                      className="form-control mx-2 "
                      placeholder="Enter Your Name"
                    />
                  </div>
                  {errors.name && (
                    <div className="text-danger mx-2">
                      {errors.name.message}
                    </div>
                  )}

                  <div className="input-group mt-4">
                    <input
                      {...register("age", {
                        required: "Please enter your age",
                        pattern: {
                          value: /^[0-9+]*$/,
                          message: "Please enter numbers only",
                        },
                      })}
                      name="age"
                      type="text"
                      className="form-control mx-2"
                      placeholder="Enter Your Age"
                    />
                  </div>
                  {errors.age && (
                    <div className="text-danger mx-2">{errors.age.message}</div>
                  )}

                  <div className="input-group mt-4">
                    <input
                      {...register("city", {
                        required: "Please enter your city",
                        pattern: {
                          value: /^[a-zA-Z ]*$/,
                          message: "Please enter character only",
                        },
                      })}
                      name="city"
                      type="text"
                      className="form-control mx-2"
                      placeholder="Enter Your City"
                    />
                  </div>
                  {errors.city && (
                    <div className="text-danger mx-2">
                      {errors.city.message}
                    </div>
                  )}

                  <div className="input-group my-4">
                    <input
                      {...register("contact", {
                        required: "Please enter your contact",
                        minLength: {
                          value: 10,
                          message: "Please enter at least 10 digit",
                        },
                        maxLength: {
                          value: 12,
                          message: "Please enter maximum 12 digit",
                        },
                        pattern: {
                          value: /^[0-9+]*$/,
                          message: "Please enter numbers only",
                        },
                      })}
                      name="contact"
                      type="text"
                      className={
                        !getFieldState("contact").isDirty
                          ? "form-control mx-2"
                          : errors.contact
                            ? "is-invalid"
                            : "is-valid"
                      }
                      placeholder="Enter Your Contact No"
                    />
                  </div>
                  {errors.contact && (
                    <div className="text-danger mx-2">
                      {errors.contact.message}
                    </div>
                  )}

                  <div className="row mx-auto">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-grid mt-3">
                      <button
                        className="py-1 btn btn-danger"
                        type="submit~!"
                        onClick={onSubmit}
                      >
                        I want to Cancel
                      </button>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-grid mt-3">
                      <button
                        className="py-1 btn btn-danger"
                        type="submit~!"
                        onClick={onSubmit}
                      >
                        Save Details
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
