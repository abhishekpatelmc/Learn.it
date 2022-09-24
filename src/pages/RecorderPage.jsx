import React from "react";
import Recorder from "../Components/Recorder";
import "./RecorderPage.css";

const RecorderPage = () => {
  return (
    <div className="main">
      <h2>Record, Encode and Download Audio</h2>
      <Recorder />
    </div>
  );
};

export default RecorderPage;
