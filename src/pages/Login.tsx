import React from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import Provider from "../components/Provider.tsx";

const Login = () => {
  const providers = [
    "Kaiser Permanente",
    "Dignity Health",
    "Stanford Health",
    "Sutter Health",
  ];

  return (
    <div className="">
      <Navbar />
      <div className="login">
        <div>
          <h2 className="title">
            Login with your
            <br />
            Medical Provider
          </h2>
        </div>
        <div>
          <p>Please select a provider to log in with:</p>
          <ul>
            {providers.map((provider) => (
              <li key={provider}>
                <Provider provider={provider} onClick={() => {}} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
