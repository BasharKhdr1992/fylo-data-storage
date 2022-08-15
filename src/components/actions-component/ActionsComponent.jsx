import React from "react";
import "./ActionsComponent.css";
import logo from "../../images/logo.svg";
import document from "../../images/icon-document.svg";
import folder from "../../images/icon-folder.svg";
import upload from "../../images/icon-upload.svg";

const ActionsComponent = () => {
  return (
    <div className="actions">
      <img src={logo} className="logo" alt="fylo logo" />
      <div className="action-bar">
        <div className="icon-container">
          <img src={document} className="action-icon" alt="document" />
        </div>
        <div className="icon-container">
          <img src={folder} className="action-icon" alt="document" />
        </div>
        <div className="icon-container">
          <img src={upload} className="action-icon" alt="document" />
        </div>
      </div>
    </div>
  );
};

export default ActionsComponent;
