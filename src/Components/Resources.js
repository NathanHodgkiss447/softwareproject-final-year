import React from "react";
import "../Styles/Resource.scss";
import Books from "./Books";
import MenuBookIcon from "@material-ui/icons/MenuBook";

function Resources() {
  return (
    <div className="resource">
      <div className="resource_header">
        <MenuBookIcon />
        <h2>Resources</h2>
      </div>
      <Books />
    </div>
  );
}

export default Resources;
