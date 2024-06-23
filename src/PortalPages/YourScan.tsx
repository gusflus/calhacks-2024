import React from "react";
import "./YourScan.css";

const YourScan = ({
  setCurrentPage,
}: {
  setCurrentPage: (_: string) => void;
}) => {
  return (
    <div className="your-scan">
      <h2>Your Scan</h2>
      <p>
        The left image is your MRI scan results from June 12 2024. The scan
        shows a stroke in the left hemisphere of the brain. The right image is
        your MRI scan results from Octoer 18 2020.
      </p>
      <div className="images">
        <div className="im-cap">
          <img src={require("../assets/mri_stroke.jpeg")} alt="mri_stroke" />
          <p>June 2024. Stroke in the left hemisphere.</p>
        </div>
        <div className="im-cap">
          <img src={require("../assets/mri_normal.jpeg")} alt="mri_normal" />
          <p>October 2020. Normal brain scan</p>
        </div>
      </div>
    </div>
  );
};

export default YourScan;
