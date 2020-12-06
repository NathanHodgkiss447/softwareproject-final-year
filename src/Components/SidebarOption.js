import React from "react";
import "../Styles/SidebarOption.scss";

function SidebarOption({ Icon, title }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash" /># {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
