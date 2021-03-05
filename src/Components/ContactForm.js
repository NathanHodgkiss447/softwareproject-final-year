import React, { useState, useEffect } from "react";
import db from "../firebase";
import { v4 as uuidv4 } from "uuid";

//Followed tutorial from CodAffection

const ContactForm = (props) => {
  const initialFieldValues = {
    projectName: "",
    id: "",
    programmingLanguage: "",
    error: "",
    solution: "",
  };

  var [values, setValues] = useState(initialFieldValues);
  var [id, setId] = useState("");

  useEffect(() => {
    // if (props.currentId === "")
    //   setValues({
    //     ...initialFieldValues,
    //   });
    // else
    setValues({
      projectName: props.projectName,
      id: props.currentId,
      programmingLanguage: props.programmingLanguage,
      error: props.error,
      solution: props.solution,
    });
  }, [props.currentId, props.journalObjects]);

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
    var id = uuidv4();
    setId(id);
    props.addOrEdit(values, id);
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
      </div>
      <div className="form-group">
        {/* <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div> */}
        <textarea
          className="form-control"
          placeholder="Error"
          name="error"
          value={values.error}
          onChange={handleInputChange}
        />
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
          value={props.currentId == "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        ></input>
      </div>
    </form>
  );
};

export default ContactForm;
