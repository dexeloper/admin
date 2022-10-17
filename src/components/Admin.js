import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideMenu from "./sidemenu/SideMenu";
import UserManagement from "./userManagement/UserManagement";
import Report from "./report/Report";

import "./admin.css";

const Admin = () => {
  return (
    <BrowserRouter>
      <div className="main-app-container">
        <SideMenu />
        <Routes>
          <Route
            exact
            path="/admin/userManagement"
            element={<UserManagement />}
          />
          <Route exact path="/admin/report" element={<Report />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Admin;
