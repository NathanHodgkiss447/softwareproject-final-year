import React from "react";
import "../Styles/SidebarResource.scss";

function SidebarResource({ title, Icon }) {
  return (
    <div className="resourceSidebar">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h3>{title}</h3> : <h3>{title}</h3>}
    </div>
  );
}

export default SidebarResource;
