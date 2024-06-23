import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
