import React from "react";
import "./PortalPage.css";

const CustomizeRecovery = ({
  setCurrentPage,
}: {
  setCurrentPage: (_: string) => void;
}) => {
  return (
    <div>
      <h2>Section 3</h2>
      <p>This is the content for section 3.</p>
      <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
    </div>
  );
};

export default CustomizeRecovery;
