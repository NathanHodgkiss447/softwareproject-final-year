/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import realTimeDB from "../firebase";
import firebaseApp from "../firebase";
import firebase from "../firebase";
import db from "../firebase";
import "../Styles/JournalForm.scss";
import Journal from "./Journal";
import { v4 as uuidv4 } from "uuid";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";

//Followed tutorial from CodAffection

const Contacts = () => {
  const [journalObjects, setContactObjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState("");

  // Test
  const [projectName, setProjectName] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const [error, setError] = useState("");
  const [solution, setSolution] = useState("");
  const [id, setId] = useState("");

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

  const addOrEdit = (e, id) => {
    if (currentId == "") {
      setCurrentId(id);
      data.doc(id).set({
        id: id,
        projectName: e.projectName,
        programmingLanguage: e.programmingLanguage,
        error: e.error,
        solution: e.solution,
      });
    } else {
      db.collection("journal")
        .doc(currentId)
        .update({
          id: currentId,
          projectName: e.projectName,
          programmingLanguage: e.programmingLanguage,
          error: e.error,
          solution: e.solution,
        })
        .then((docRef) => {
          console.log("Document SET with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  const onDelete = (journal) => {
    data
      .doc(journal.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="journal__header">
        <h3>Programming Journal</h3>
      </div>

      <div className="row">
        <div className="col-md-5">
          <ContactForm
            {...{
              addOrEdit,
              currentId,
              journalObjects,
              projectName,
              programmingLanguage,
              error,
              solution,
            }}
          />
        </div>
        <div class="col-md-7 ">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Project Name</th>
                <th>Programming Language</th>
                <th>Error</th>
                <th>Solution</th>
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
                    <td>{journal.solution}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(journal.id);
                          setProjectName(journal.projectName);
                          setProgrammingLanguage(journal.programmingLanguage);
                          setError(journal.error);
                          setSolution(journal.solution);
                        }}
                      >
                        <VisibilityIcon></VisibilityIcon>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(journal);
                        }}
                      >
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
