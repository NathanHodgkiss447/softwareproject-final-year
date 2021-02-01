const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  titleInput: {
    height: "50px",
    width: "100%",
    boxSizing: "border-box",
    border: "none",
    padding: "5px",
    fontSize: "24px",
    // width: "calc(100% - 300px)",
    backgroundColor: "#29487d",
    color: "white",
    paddingLeft: "50px",
  },
  editIcon: {
    position: "absolute",
    marginLeft: "10px",
    top: "80px",
    color: "white",
    width: "10",
    height: "10",
  },
  editorContainer: {
    // display: "flex",
    // flexDirection: "column",
    height: "100%",
    maxWidth: "63%",
    width: "100%",
    boxSizing: "border-box",
    overflow: "scroll",
  },
});

export default styles;
