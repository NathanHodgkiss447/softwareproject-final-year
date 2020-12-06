import React from "react";
import "../Styles/Sidebar.scss";
import SidebarOption from "./SidebarOption";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Software Project</h2>
          <h3>
            <FiberManualRecordIcon />
            Nathan
          </h3>
        </div>
        <CreateIcon />
        <SidebarOption Icon={} title="Resources" />
        <SidebarOption Icon={} title="Programming Journal" />
        <SidebarOption />
      </div>
    </div>
  );
}

export default Sidebar;
