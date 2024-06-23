import React, { useState } from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import "./Portal.css";

import CheckIn from "../PortalPages/CheckIn.tsx";
import CustomizeRecovery from "../PortalPages/CustomizeRecovery.tsx";
import ImpactAreas from "../PortalPages/ImpactAreas.tsx";
import Timeline from "../PortalPages/Timeline.tsx";
import Verification from "../PortalPages/Verification.tsx";
import YourScan from "../PortalPages/YourScan.tsx";

const Portal = () => {
  const [currentPage, setCurrentPage] = useState<string>("section1");
  const navItems = [
    { id: "section1", title: "Verification" },
    { id: "section2", title: "Your Scan" },
    { id: "section3", title: "Impact Areas" },
    { id: "section4", title: "Customize your Recovery" },
    { id: "section5", title: "Timeline" },
    { id: "section6", title: "Check In" },
  ];

  const getCurrentPage = () => {
    switch (currentPage) {
      case "section1":
        return <Verification setCurrentPage={setCurrentPage} />;
      case "section2":
        return <YourScan setCurrentPage={setCurrentPage} />;
      case "section3":
        return <ImpactAreas setCurrentPage={setCurrentPage} />;
      case "section4":
        return <CustomizeRecovery setCurrentPage={setCurrentPage} />;
      case "section5":
        return <Timeline setCurrentPage={setCurrentPage} />;
      case "section6":
        return <CheckIn setCurrentPage={setCurrentPage} />;
      default:
        return <Verification setCurrentPage={setCurrentPage} />;
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
                  <div
                    onClick={() => setCurrentPage(item.id)}
                    className="item"
                    style={currentPage === item.id ? { color: "#eb9617" } : {}}
                  >
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
