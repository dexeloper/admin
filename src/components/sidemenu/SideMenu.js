import { React } from "react";

import SideMenuLink from "./SideMenuLink";

import "./styles/sideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menu-container">
      <img
        src={require("./images/logofinal.png")}
        className="logo-final-side-menu"
      />
      <div className="sm-links-container">
        <SideMenuLink
          click="um-clicked"
          id="userManagement-link"
          to="/admin/userManagement"
          linkName="User Management"
          icon="fa-regular fa-circle-user sm-fa-icons"
        />
        <SideMenuLink
          click="report-clicked"
          id="report-link"
          to="/admin/report"
          linkName="Report"
          icon="fa-regular fa-id-badge sm-fa-icons"
        />
      </div>
    </div>
  );
};

export default SideMenu;
