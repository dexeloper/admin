import React from "react";

const UserDetails = () => {
  return (
    <>
      <div>
        <div className="user-manage-head-row">
          <div className="user-emp-entered user-emp-name">Name</div>
          <div className="user-emp-entered user-emp-email">Email Address</div>
          <div className="user-emp-entered user-emp-contactno">
            Contact Number
          </div>
          <div className="user-emp-entered user-emp-joindate">Join Date</div>
          <div className="user-emp-entered user-emp-role">Role</div>
          <div className="user-emp-entered user-emp-enable">Enable/Disable</div>
          <div className="user-emp-entered user-emp-target">Target</div>
          <div className="user-emp-entered user-emp-action">Action</div>
        </div>
        <hr className="headrow-divider" />
      </div>
    </>
  );
};

export default UserDetails;
