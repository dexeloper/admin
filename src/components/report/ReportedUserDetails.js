import React from "react";

const ReportedUserDetails = () => {
  return (
    <>
      <div>
        <div className="report-head-row">
          <div className="reported-user-entered-details">Name</div>
          <div className="reported-user-entered-details">Total Projects</div>
          <div className="reported-user-entered-details">Ongoing Projects</div>
          <div className="reported-user-entered-details">
            Completed Projects
          </div>
        </div>
        <hr className="headrow-divider" />
      </div>
    </>
  );
};

export default ReportedUserDetails;
