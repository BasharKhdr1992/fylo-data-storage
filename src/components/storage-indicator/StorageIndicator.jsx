import React from "react";
import ProgressBar from "./ProgressBar";
import "./StorageIndicator.css";
import Triangle from "./Triangle";

const StorageIndicator = ({ totalCapacity, used }) => {
  return (
    <div className="storage-indicator">
      <p className="desc">
        You’ve used <span className="storage-used">{used} GB</span> of your
        storage
      </p>
      <ProgressBar used={used} totalCapacity={totalCapacity} />
      <div className="min-max-storage">
        <p className="min-storage">0 GB</p>
        <p className="max-storage">{totalCapacity} GB</p>
      </div>
      <div className="label">
        <h1 className="left">{totalCapacity - used}</h1>
        <p className="unit">GB Left</p>
      </div>
      <Triangle />
    </div>
  );
};

export default StorageIndicator;
