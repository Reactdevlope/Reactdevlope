import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function AboutFamily(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formValues, setFormValues] = useState([{ members: "", relation: "" }]);
  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {
    setFormValues([...formValues, { members: "", relation: "" }]);
  };
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="atb-features-container-1 mx-3 my-4">
      <div className="row justify-content-center mx-auto">
        <div className="col-4 col-sm-5 col-lg-5  text-white atb-family-heading">YOU-[NAME]</div>
        <div className="col-6 col-sm-5 col-lg-5  text-white text-end atb-family-heading">
          ADD FAMILY MEMBERS
        </div>
      </div>
      <div className="row justify-content-center mx-auto">
        <div className="col-10 col-sm-10 atb-about-container mt-4 py-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            {formValues.map((element, index) => (
              <div className="form-inline" key={index}>
                <div className="row mx-auto">
                  <div className="col-10 col-sm-10 col-md-5 col-lg-5 mx-auto">
                    <div className="mb-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label atb-aboutus-form-label text-dark"
                      >
                        ADD FAMILY MEMBERS
                      </label>
                    </div>
                    <div className="mb-1">
                      <input
                        type="text"
                        className="form-control"
                        name="members"
                        {...register("member", {
                          required: "Please enter name..!", pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: "Enter only letters",
                          },

                        })}
                      />
                      {errors.member && (
                        <span className="atb-error-message">
                          {errors.member.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-10 col-sm-10 col-md-5 col-lg-5 mx-auto">
                    <div className="mb-1">
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="form-label atb-aboutus-form-label text-dark"
                      >
                        SPECIFY RELATION WITH YOU
                      </label>
                    </div>
                    <div className="mb-1">
                      <input
                        type="text"
                        className="form-control"
                        name="relation"
                        {...register("relations", {
                          required: "Please specify relation..!",
                          pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: "Enter only letters",
                          },
                        })}
                      />
                      {errors.relations && (
                        <span className="atb-error-message">
                          {errors.relations.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-11 col-sm-11 col-md-1 col-lg-1 mt-3 p-3 me-3">
                    {index + 1 ? (
                      <button
                        type="button"
                        className="btn bg-warning float-end"
                        onClick={() => removeFormFields(index)}
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-dash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                          </svg>
                        </span>
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
            <div className="row ms-3">
              <div className="col-4 col-sm-2 col-md-2 col-lg-2 d-grid">
                <button
                  type="button"
                  className="btn mt-3 bg-warning"
                  onClick={() => addFormFields()}
                >
                  <span>Add</span>
                </button>
              </div>
              <div className="col-4 col-sm-2 col-md-2 col-lg-2 d-grid">
                <button type="submit" className="btn mt-3 bg-warning">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}