import React from "react";
import db from "../firebase";
import EditorComponent from "./Editor/EditorNote.js";
import "../Styles/Note.scss";
import SidebarComponent from "./SidebarNotes/SidebarNotes";

/*
 * Class Name: Note.js
 * Date: 28/04/2021
 *
 * @author Nathan Hodgkiss, X17381176
 *
 * @reference https://www.youtube.com/watch?v=dGM_T5gqmrA
 * @reference https://firebase.google.com/docs/firestore
 */
class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }

  componentDidMount = () => {
    db.collection("notes").onSnapshot((serverUpdate) => {
      const notes = serverUpdate.docs.map((_doc) => {
        const data = _doc.data();
        data["id"] = _doc.id;
        return data;
      });
      this.setState({ notes: notes });
    });
  };

  noteUpdate = (id, noteObj) => {
    db.collection("notes").doc(id).update({
      title: noteObj.title,
      body: noteObj.body,
    });
  };

  newNote = async () => {
    const note = {
      title: "",
      body: "",
    };

    const newFromDB = await db.collection("notes").add({
      title: note.title,
      body: note.body,
    });
    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });
    const newNoteIndex = this.state.notes.indexOf(
      this.state.notes.filter((_note) => _note.id === newID)[0]
    );

    this.setState({
      selectedNote: this.state.notes[newNoteIndex],
      selectedNoteIndex: newNoteIndex,
    });
  };

  selectNote = (note, index) => {
    this.setState({ selectedNoteIndex: index, selectedNote: note });
  };

  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({
      notes: this.state.notes.filter((_note) => _note !== note),
    });
    if (this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectNote: null });
    } else {
      this.state.notes.length > 1
        ? this.selectNote(
            this.state.notes[(this.state.selectedNoteIndex, -1)],
            this.state.selectedNoteIndex - 1
          )
        : this.setState({ selectedNoteIndex: null, selectNote: null });
    }
    db.collection("notes").doc(note.id).delete();
  };

  render() {
    return (
      <div className="app-container">
        <SidebarComponent
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          selectNote={this.selectNote}
          deleteNote={this.deleteNote}
          newNote={this.newNote}
        />
        {this.state.selectedNote ? (
          <EditorComponent
            selectedNote={this.state.selectedNote}
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}
            noteUpdate={this.noteUpdate}
          />
        ) : null}
      </div>
    );
  }
}

export default Note;
