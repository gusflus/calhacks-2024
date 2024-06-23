import React from "react";
import "./CheckIn.css";

const CheckIn = ({
  setCurrentPage,
}: {
  setCurrentPage: (_: string) => void;
}) => {
  return (
    <div className="check-in">
      <h1>Check In</h1>
      <div className="check-in-content">
        <div className="check-in-info">
          <h2>How are you feeling today?</h2>
          <p>On a scale of 1 to 10, how would you rate your pain?</p>
        </div>
        <div className="check-in-slider">
          <input
            type="range"
            min="1"
            max="10"
            defaultValue="5"
            className="slider"
            id="pain-slider"
          />
          <label htmlFor="pain-slider">5</label>
        </div>
        <button
          className="check-in-button"
          onClick={() => {
            setCurrentPage("timeline");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CheckIn;
