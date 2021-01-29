import React from "react";

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectednote: null,
    };
  }
}

export default Note;
