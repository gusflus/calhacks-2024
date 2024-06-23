import React from "react";
import "./YourScan.css";

const YourScan = ({
  setCurrentPage,
}: {
  setCurrentPage: (_: string) => void;
}) => {
  return (
    <div>
      <h2>Your Scan</h2>
      <p>This is the content for section 2.</p>
      <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
    </div>
  );
};

export default YourScan;
