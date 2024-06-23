import React from "react";
import logo from "../assets/logo-stack.png";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import styles from "./Landing.css";

const Landing = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className={styles.landing}>
      <Navbar />
      <main className={styles.content}>
        <img src={logo} alt="Phoenix Health Logo" className={styles.logo} />
        <div className={styles.titleBox}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
