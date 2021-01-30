import React from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "",
      title: "",
      id: "",
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <BorderColorIcon className={classes.editIcon} />
        <input
          className={classes.titleInput}
          placeholder="Note Title: "
          value={this.state.title ? this.state.title : null}
          onChange={(e) => this.updateTitle(e.target.value)}
        ></input>
        <ReactQuill value={this.state.body} onChange={this.updateBody} />
      </div>
    );
  }

  updateBody = async (val) => {
    await this.setState({ body: val });
    this.updateBody();
  };

  updateTitle = async (text) => {
    await this.setState({ title: text });
    this.update();
  };

  //Debounce delays the update of the database by a few seconds.
  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.body,
    });
  }, 1500);
}

export default withStyles(styles)(EditorComponent);
