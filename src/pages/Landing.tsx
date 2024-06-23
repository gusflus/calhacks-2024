import React from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import "./Landing.css";

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
      <Footer />
    </div>
  );
};

export default Landing;
