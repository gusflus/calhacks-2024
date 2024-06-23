import React from "react";
import "./PortalPage.css";

const ImpactAreas = ({
  setCurrentPage,
}: {
  setCurrentPage: (_: string) => void;
}) => {
  return (
    <div>
      <h2>Impact Areas</h2>
      <p>This is the content for section 2.</p>
      <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
    </div>
  );
};

export default ImpactAreas;
