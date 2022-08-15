import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ totalCapacity, used }) => {
  const progressBarWidth = (used * 99) / totalCapacity;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}>
        <div className="circle" />
      </div>
    </div>
  );
};

export default ProgressBar;
