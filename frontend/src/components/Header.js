import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo_bolang.png";
import defaultAvatar from "../assets/avatar.jpg";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="Bolang Logo" className="header-logo" />
        </Link>
      </div>

      <div className="header-right">
        <Link to="/profile" className="profile-link">
          <img src={defaultAvatar} alt="User" className="profile-avatar-small" />
        </Link>
      </div>
    </header>
  );
}
