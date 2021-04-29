import React from "react";
import "../Styles/SidebarResource.scss";

/*
 * Class Name: SidebarResource.js
 * Date: 28/04/2021
 *
 * @author Nathan Hodgkiss, X17381176
 *
 * @reference https://www.youtube.com/watch?v=Oo4ziTddOxs
 * @reference https://firebase.google.com/docs/firestore
 */

function SidebarResource({ title, Icon }) {
  return (
    <div className="resourceSidebar">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h6>{title}</h6> : <h6>{title}</h6>}
    </div>
  );
}

export default SidebarResource;
