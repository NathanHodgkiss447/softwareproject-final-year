import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import realTimeDB from "../firebase";
import firebaseApp from "../firebase";
import firebase from "../firebase";
import db from "../firebase";
import "../Styles/JournalForm.scss";
import Journal from "./Journal";

import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";

//Followed tutorial from CodAffection

const Contacts = () => {
  const [journalObjects, setContactObjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const data = db.collection("journal");

  function getJournal() {
    setLoading(true);
    data.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setContactObjects(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getJournal();
  }, []);

  const addOrEdit = (e) => {
    db.collection("journal")
      .add({
        projectName: e.projectName,
        programmingLanguage: e.programmingLanguage,
        error: e.error,
        solution: e.solution,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

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
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Project Name</th>
                <th>Programming Language</th>
                <th>Error</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <>
                {journalObjects.map((journal) => (
                  <tr key={journal.id}>
                    <td>{journal.projectName}</td>
                    <td>{journal.programmingLanguage}</td>
                    <td>{journal.error}</td>
                    <td>
                      <a className="btn text-primary">
                        <VisibilityIcon></VisibilityIcon>
                      </a>
                      <a className="btn text-danger">
                        <DeleteIcon></DeleteIcon>
                      </a>
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
