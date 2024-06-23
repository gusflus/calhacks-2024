import React from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

const Login = () => {
  return (
    <div>
      <div className="login">
        <Navbar />
        <h2 className="title">login page</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
