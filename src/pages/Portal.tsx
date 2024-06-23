import React, { useState } from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import "./Portal.css";

import Verification from "../PortalPages/Verification.tsx";

const Portal = () => {
  const [currentPage, setCurrentPage] = useState<string>("section1");
  const navItems = [
    { id: "section1", title: "Your Scan" },
    { id: "section2", title: "Impact Areas" },
    { id: "section3", title: "Customize your Recovery" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getCurrentPage = () => {
    switch (currentPage) {
      case "section1":
        return <Verification />;
      case "section2":
        return (
          <section id="section2">
            <h2>Impact Areas</h2>
            <p>This is the content for section 2.</p>
            <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          </section>
        );
      case "section3":
        return (
          <section id="section3">
            <h2>Section 3</h2>
            <p>This is the content for section 3.</p>
            <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          </section>
        );
      default:
        return <Verification />;
    }
  };

  return (
    <div className="portal">
      <Navbar logout />
      <div className="portal-content">
        <aside className="side-panel">
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <div onClick={() => setCurrentPage(item.id)} className="item">
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="main-content">{getCurrentPage()}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Portal;
