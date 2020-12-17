import React from "react";
import { Form, Field } from "react-final-form";
import Styles from "./Journal-Import.js";
import DatePicker from "react-datepicker";
import "../Styles/Journal.scss";
import "react-datepicker/dist/react-datepicker.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const DatePickerAdapter = ({ input: { onChange, value }, ...rest }) => (
  <DatePicker selected={value} onChange={(date) => onChange(date)} {...rest} />
);

function Journal() {
  return (
    <div className="journal">
      <Styles>
        <div className="journal__header">
          <h3>Programming Journal</h3>
        </div>
        <Form
          onSubmit={onSubmit}
          // initialValues={{ stooge: "larry", employed: false }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Project Name</label>
                <Field
                  name="project"
                  component="input"
                  type="text"
                  placeholder="Software project"
                />
              </div>
              <div>
                <label>Programming Language</label>
                <Field name="Programming Language" component="select" multiple>
                  <option value="Java">Java</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="C++">C++</option>
                  <option value="C#">C#</option>
                  <option value="Python">Python</option>
                  <option value="Kotlin">Kotlin</option>
                </Field>
              </div>
              <div>
                <label>Date: </label>
                <Field
                  name="date"
                  // validate={required}
                  dateFormat="yyyy/MM/dd"
                  component={DatePickerAdapter}
                />
              </div>
              <div>
                <label>Error</label>
                <Field name="Error" component="textarea" placeholder="Error" />
              </div>
              <div>
                <label>Solution</label>
                <Field
                  name="Solution"
                  component="textarea"
                  placeholder="Solution"
                />
              </div>

              <div>
                <label>Solved</label>
                <Field name="Solved" component="input" type="checkbox" />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </Styles>
    </div>
  );
}

export default Journal;
