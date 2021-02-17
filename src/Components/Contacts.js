import React from "react";
import ContactForm from "./ContactForm";
import "../Styles/JournalForm.scss";

//Followed tutorial from CodAffection

const Contacts = () => {
  const addOrEdit = (obj) => {};

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 class="display-4">Journal Entry</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm addOrEdit={addOrEdit} />
        </div>
        <div class="col-md-7 ">
          <div>list of entries</div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
