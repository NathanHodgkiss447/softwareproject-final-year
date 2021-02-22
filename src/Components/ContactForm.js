import React, { useState, useEffect } from "react";
import db from "../firebase";

//Followed tutorial from CodAffection

const ContactForm = (props) => {
  const initialFieldValues = {
    projectName: "",
    programmingLanguage: "",
    error: "",
    solution: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  //Used to update input fields
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //Used to submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Project Name"
          name="projectName"
          value={values.projectName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group ">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Programming Language"
            name="programmingLanguage"
            value={values.programmingLanguage}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Error"
            name="error"
            value={values.error}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Solution"
          name="solution"
          value={values.solution}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Save"
          className="btn btn-primary btn-block"
        ></input>
      </div>
    </form>
  );
};

export default ContactForm;
