import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.scss";
import SidebarOption from "./SidebarOption";
import SidebarResource from "./SidebarResource";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import db from "../firebase";
import { firebaseApp } from "../firebase";
import { useStateValue } from "../StateProvider";

{
  /* Code inspiration from Clever Programmer YT */
}
function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Software Project</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>

      <Link to="/resources">
        <SidebarResource Icon={InsertCommentIcon} title="Resources" />
      </Link>

      <Link to="/journal">
        <SidebarResource Icon={InsertCommentIcon} title="Programming Journal" />
      </Link>
      <Link to="/journal-notes">
        <SidebarResource
          Icon={InsertCommentIcon}
          title="Programming Journal - Notes"
        />
      </Link>
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
