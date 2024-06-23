import React from "react";
import "./Verification.css";

const Verification = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) => {
  const handleVerification = () => {
    setCurrentPage("section2");
  };

  return (
    <div className="verification-container">
      <div className="verification-card">
        <h1 className="verification-title">Verification</h1>
        <p className="verification-text">
          By clicking the button below, you certify that you are the person
          stated and that you are authorized to access these medical records.
        </p>
        <button onClick={handleVerification} className="verification-button">
          Verify and Access Medical Records
        </button>
      </div>
    </div>
  );
};

export default Verification;
