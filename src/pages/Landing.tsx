import React from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <main className="content">
        <div className="infoBox">
          <h1>World-class preventive and specialty care</h1>
          <p>
            Learn how your primary and specialty care teams work together at every step — leading to better prevention, better treatment, and better outcomes.
          </p>
          <button className="learnMore">Learn more</button>
        </div>
        <div className="imageBox">
          <img src={require("../assets/outofcollegemoneyspentseenofuturepaynorent_allthemoneysgonenowheretogo.jpg")} alt="Medical professionals looking at screens" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;