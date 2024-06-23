import React from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import "./Portal.css";

const Portal = () => {
  const navItems = [
    { id: "section1", title: "Section 1" },
    { id: "section2", title: "Section 2" },
    { id: "section3", title: "Section 3" },
    { id: "carousel", title: "Carousel" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                    onClick={() => scrollToSection(item.id)}
                    className="item"
                  >
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <section id="section1">
            <h2>Section 1</h2>
            <p>This is the content for section 1.</p>
            <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          </section>
          <section id="section2">
            <h2>Section 2</h2>
            <p>This is the content for section 2.</p>
            <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          </section>
          <section id="section3">
            <h2>Section 3</h2>
            <p>This is the content for section 3.</p>
            <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          </section>
          <section id="carousel">
            <h2>Carousel</h2>
            <p>Your carousel component will go here.</p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Portal;
