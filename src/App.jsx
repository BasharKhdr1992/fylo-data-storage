import React from "react";
import "./App.css";
import ActionsComponent from "./components/actions-component/ActionsComponent";
import StorageIndicator from "./components/storage-indicator/StorageIndicator";

const App = () => {
  return (
    <div className="wrapper">
      <div className="data-storage">
        <ActionsComponent />
        <StorageIndicator totalCapacity={1000} used={678} />
      </div>
    </div>
  );
};

export default App;
