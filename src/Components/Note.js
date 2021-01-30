import React from "react";
import db from "../firebase";

import EditorComponent from "./Editor/EditorNote.js";
import SidebarComponent from "./SidebarNotes/SidebarNotes";

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectednote: null,
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

  render() {
    return (
      <div className="app-container">
        <SidebarComponent />
        <EditorComponent />
      </div>
    );
  }
}

export default Note;
