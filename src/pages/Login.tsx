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
    <div className="login">
      <Navbar />
      <div className="login-content">
        <div className="login-info">
          <h2 className="title">
            Login with your
            <br />
            Medical Provider
          </h2>
          <p>Please select a provider from the list on the right to log in.</p>
        </div>
        <div className="login-providers">
          <h3>Select a Provider:</h3>
          <ul>
            {providers.map((provider) => (
              <li key={provider}>
                <Provider
                  provider={provider}
                  onClick={() => {
                    window.location.href = "/#/portal";
                  }}
                />
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
