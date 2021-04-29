import React from "react";
import "../Styles/Message.scss";

/*
 * Class Name: Message.js
 * Date: 28/04/2021
 *
 * @author Nathan Hodgkiss, X17381176
 *
 * @reference https://www.youtube.com/watch?v=Oo4ziTddOxs
 *
 */

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message_info">
        <h4>
          {user}{" "}
          {/* <span className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span> */}
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
