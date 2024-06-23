import React from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

const Login = () => {
  const providers = ["Google", "Facebook", "Twitter"];

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
              <li key={provider}>{provider}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
