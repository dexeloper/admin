import React from "react";

import ReportedUserDetails from "./ReportedUserDetails";

import "./report.css";

const Report = () => {
  return (
    <>
      <div className="report-container">
        <h2 className="report-head">Project Report</h2>
        <div className="report-container-block">
          <div className="report-head-row">
            <div className="reported-user-details">Name</div>
            <div className="reported-user-details">Total Projects</div>
            <div className="reported-user-details">Ongoing Projects</div>
            <div className="reported-user-details">Completed Projects</div>
          </div>
          <hr className="headrow-divider" />
          <ReportedUserDetails />
        </div>
      </div>
    </>
  );
};

export default Report;
