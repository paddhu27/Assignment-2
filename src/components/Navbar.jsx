import React from "react";
import VitwitLogo from "../assets/vitwit-logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
      <div className="menu-list nav-text">
        <div>About Us</div>
        <div>Services</div>
        <div>Resolute</div>
        <div>Partners</div>
        <div>Ventures</div>
        <div>
          <button className="get-touch-btn">Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
