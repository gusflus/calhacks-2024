import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
