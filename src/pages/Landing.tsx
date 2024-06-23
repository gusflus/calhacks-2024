import React, { useState, useEffect } from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import "./Landing.css";

const phrases = ["you.", "the future.", "the world.", "your family."];

const Landing = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false);
      }, 900); // Change opacity after half a second
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="landing">
      <Navbar />
      <main className="content">
        <div className="infoBox">
          <h1>
            Stroke recovery designed for{""}
            <span className={`dynamicText ${isFading ? "fade" : ""}`}>
              {phrases[currentPhraseIndex]}
            </span>
          </h1>
          <h2>
            AI-powered insights from your doctor give you<br></br> full control of your own recovery strategy.<br></br>
          </h2>
          <a href={"/login"}><button className="learnMore">Log in</button></a>
        </div>
        <div className="imageBox">
          <img
            src={require("../assets/outofcollegemoneyspentseenofuturepaynorent_allthemoneysgonenowheretogo.jpg")}
            alt="Medical professionals looking at screens"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
