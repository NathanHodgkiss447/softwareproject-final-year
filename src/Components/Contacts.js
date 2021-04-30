/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import db from "../firebase";
import "../Styles/JournalForm.scss";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { toast, ToastContainer } from "react-toastify";

/*
 * Class Name: ContactForm.js
 * Date: 28/04/2021
 *
 * @author Nathan Hodgkiss, X17381176
 *
 * @reference https://www.youtube.com/watch?v=pI4438IHBYY
 * @reference https://firebase.google.com/docs/firestore
 */

const Contacts = () => {
  const [journalObjects, setContactObjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const [error, setError] = useState("");
  const [solution, setSolution] = useState("");

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
      data
        .doc(id)
        .set({
          id: id,
          projectName: e.projectName,
          programmingLanguage: e.programmingLanguage,
          error: e.error,
          solution: e.solution,
        })
        .then(() => {
          setCurrentId("");
          toast.success("Document Created");
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
        .then(() => {
          setCurrentId("");
          toast.success("Document Updated");
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
      .then(() => {
        setCurrentId("");
        toast.error("Document Deleted");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="journal__header" data-testid="journal-test">
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
                <th data-testid="heading-name">Project Name</th>
                <th data-testid="heading-language">Project Language</th>
                <th data-testid="heading-error">Error</th>
                <th data-testid="heading-solution">Solution</th>
                <th data-testid="heading-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              <>
                {journalObjects.map((journal) => (
                  <tr key={journal.id}>
                    <td>{journal.projectName}</td>
                    <td>{journal.programmingLanguage}</td>
                    <td className="error">{journal.error}</td>
                    <td className="solution">{journal.solution}</td>
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
