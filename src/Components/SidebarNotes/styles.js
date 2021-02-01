const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  newNoteBtn: {
    width: "100%",
    height: "35px",
    border: "1px solid gray",
    borderRadius: "0px",
    backgroundColor: "#33475b",
    color: "white",
    "&:hover": {
      backgroundColor: "#88a2ce",
    },
  },
  sidebarContainer: {
    marginTop: "0px",
    width: "310px",
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    overflowY: "scroll",
    overflowX: "hidden",
  },
});

export default styles;
