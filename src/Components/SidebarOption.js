import React from "react";
import { useHistory } from "react-router-dom";
import "../Styles/SidebarOption.scss";
import db from "../firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h6>{title}</h6>
      ) : (
        <h6 className="sidebarOption__channel">
          <span className="sidebarOption__hash" /># {title}
        </h6>
      )}
    </div>
  );
}

export default SidebarOption;
