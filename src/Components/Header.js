import React from "react";
import "../Styles/Header.scss";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/Help";
import { useStateValue } from "../StateProvider";
import { firebaseApp } from "../firebase";

function Header() {
  const [{ user }] = useStateValue();

  const handleLogout = () => {
    firebaseApp.auth().signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <div className="header__right">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
