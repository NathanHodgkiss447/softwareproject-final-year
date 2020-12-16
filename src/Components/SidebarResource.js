import React from "react";
import "../Styles/SidebarResource.scss";

function SidebarResource({ title, Icon }) {
  return (
    <div className="resourceSidebar">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h6>{title}</h6> : <h6>{title}</h6>}
    </div>
  );
}

export default SidebarResource;
