import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../SidebarItem/SidebarItem";

// Code followed from The Assembly on YouTube

class SidebarComponent extends React.Component {
  constructor() {
    super();
  }

  newNote = () => {
    this.props.newNote();
  };

  selectNote = (note, index) => {
    this.props.selectNote(note, index);
  };

  deleteNote = (note) => {
    this.props.deleteNote(note);
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    // console.log(notes);
    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNote} className={classes.newNoteBtn}>
            New Note
          </Button>
          <List>
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SidebarItemComponent>
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default withStyles(styles)(SidebarComponent);
