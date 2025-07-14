import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lab1StaticSite from "./Lab1StaticSite";
import Lab2DynamicReact from "./Lab2DynamicReact";
import CaseLog from "./CaseLog";
import QuickReference from "./QuickReference";

function App() {
  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1 style={{ color: "#4b2e83", textAlign: "center" }}>OrthoLogix: Clinic Tools Demo</h1>
        {/* Main Navigation */}
        <nav style={{ marginBottom: "2rem", textAlign: "center" }}>
          <Link to="/lab1" style={{ margin: "0 1em", fontWeight: 600 }}>Lab 1: Static HTML/CSS</Link>
          <Link to="/lab2" style={{ margin: "0 1em", fontWeight: 600 }}>Lab 2: React SPA</Link>
          <Link to="/caselog" style={{ margin: "0 1em", fontWeight: 600 }}>Surgical Case Log</Link>
          <Link to="/reference" style={{ margin: "0 1em", fontWeight: 600 }}>Quick Reference</Link>
        </nav>
        <Routes>
          {/* Lab 1: Static Site */}
          <Route path="/lab1" element={<Lab1StaticSite />} />

          {/* Lab 2: React SPA Demo */}
          <Route path="/lab2" element={<Lab2DynamicReact />} />

          {/* Lab 3: Core Clinic Tools */}
          <Route path="/caselog" element={<CaseLog />} />
          <Route path="/reference" element={<QuickReference />} />

          {/* Default landing page can be CaseLog or Lab 1 */}
          <Route path="/" element={<Lab1StaticSite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

