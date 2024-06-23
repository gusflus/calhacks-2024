import React from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import "./Landing.css";

const Landing = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="landing">
      <Navbar />
      <main className="content">
        <div className="centerBox">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;