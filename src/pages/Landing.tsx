import React from "react";
import Navbar from "../components/Navbar.tsx";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <div className="background-image">
        <div className="title-box">
          <h1>Welcome to Our Website</h1>
          <p>Your journey starts here.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
