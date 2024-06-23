import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import Portal from "./pages/Portal.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </Router>
  );
}

export default App;
