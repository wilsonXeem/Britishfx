import React from "react";

const SubHeader = ({ title, plan }) => {
  return (
    <div className="subhead">
      <div className="hhd">
        <h5>{title}</h5>
      </div>
      {/* <div className="sub">
        <p>
          Account Code: #67497795159 | Plan: Bronze | ROI: 10% weekly
        </p>
      </div> */}
    </div>
  );
};

export default SubHeader;
