import React, { useState } from "react";
import "./PortalPage.css";

const Verification = ({
  setCurrentPage,
}: {
  setCurrentPage: (_: string) => void;
}) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setCurrentPage("section2");
  };

  return (
    <div>
      <h1>Verification</h1>
      {!isVerified ? (
        <div>
          <p>Please verify your identity to access your medical records:</p>
          <form onSubmit={handleVerification}>
            {/* Add your verification form fields here */}
            <button type="submit">Verify</button>
          </form>
        </div>
      ) : (
        <div>
          <p>
            Verification successful! You can now access your medical records.
          </p>
          {/* Add your medical records component here */}
        </div>
      )}
    </div>
  );
};

export default Verification;
