import React, { useState } from "react";
import "./Verification.css";

const Verification = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) => {
  const [verified, setVerified] = useState<boolean>(false);
  const handleVerification = () => {
    setVerified(true);
    setCurrentPage("section2");
  };

  if (verified) {
    return (
      <div className="verification-container">
        <div className="verification-card">
          <h1 className="verification-title">Verification Successful</h1>
          <p className="verification-text">
            You have successfully verified your identity. You can now access
            your medical records.
          </p>
        </div>
      </div>
    );
  }

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
