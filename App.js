import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SurgeonGreeting from './SurgeonGreeting.js';
import CaseCard from './Casecard.js';

// STYLE CONSTANTS (add these after your imports)
const navBtnStyle = {
  background: "#4b2e83",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  padding: "0.6em 1.4em",
  fontWeight: 600,
  margin: "0.5em",
  cursor: "pointer"
};

const formStyle = {
  background: "#f1effa",
  borderRadius: 10,
  padding: "2em 1.5em",
  margin: "2em 0",
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  boxShadow: "0 1px 5px rgba(75,46,131,0.05)"
};

// --- COMPONENTS ---

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "3em" }}>
      <h1>OrthoLogix: Post-Op Outcome Tracker</h1>
      <SurgeonGreeting surgeon="Kim" />
      <p>
        Track your surgical outcomes, complications, and monitor quality improvement with ease.<br />
        Navigate to the Case Log to add and view your surgical cases.
      </p>
      <Link to="/case-log">
        <button style={navBtnStyle}>Go to Case Log</button>
      </Link>
    </div>
  );
}

function CaseLog() {
  const [cases, setCases] = useState([]);
  const [procedure, setProcedure] = useState("");
  const [outcome, setOutcome] = useState("");
  const [complication, setComplication] = useState("");
  const [error, setError] = useState("");

  function handleAddCase(e) {
    e.preventDefault();
    if (procedure.trim() === "" || outcome.trim() === "") {
      setError("Procedure and outcome required.");
      return;
    }
    setCases([
      ...cases,
      { procedure, outcome, complication }
    ]);
    setProcedure("");
    setOutcome("");
    setComplication("");
    setError("");
  }

  return (
    <div style={{ maxWidth: 480, margin: "3em auto", textAlign: "left" }}>
      <h1 style={{ color: "#4b2e83", textAlign: "center" }}>Case Log</h1>
      <form onSubmit={handleAddCase} style={formStyle}>
        <label>
          Procedure:
          <input
            type="text"
            value={procedure}
            onChange={e => setProcedure(e.target.value)}
          />
        </label>
        <label>
          Outcome:
          <input
            type="text"
            value={outcome}
            onChange={e => setOutcome(e.target.value)}
          />
        </label>
        <label>
          Complication (optional):
          <input
            type="text"
            value={complication}
            onChange={e => setComplication(e.target.value)}
          />
        </label>
        <button
          type="submit"
          style={navBtnStyle}
          disabled={procedure.trim() === "" || outcome.trim() === ""}
        >
          Add Case
        </button>
        {error && <span style={{ color: "red" }}>{error}</span>}
      </form>

      <div style={{ marginTop: "2em" }}>
        {cases.length === 0 ? (
          <div style={{ textAlign: "center", color: "#aaa" }}>
            No cases logged yet.
          </div>
        ) : (
          cases.map((c, i) =>
            <CaseCard key={i} proc={c.procedure} outcome={c.outcome} comp={c.complication} />
          )
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: "2em" }}>
        <Link to="/">
          <button style={navBtnStyle}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "3em", maxWidth: 600, margin: "3em auto" }}>
      <h2 style={{ color: "#4b2e83" }}>About OrthoLogix</h2>
      <p>
        OrthoLogix is a modern post-op surgical outcome tracker, developed for orthopedic surgeons seeking to improve patient care and data-driven decision-making.<br />
        Built as part of the Northwestern MSIS Capstone, it showcases modern web app best practices (React SPA, state, component reuse, and more).
      </p>
    </div>
  );
}

// --- MAIN APP ---

function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", marginTop: "2em" }}>
        <Link to="/" style={{ marginRight: "1em", fontWeight: 600 }}>Home</Link>
        <Link to="/case-log" style={{ marginRight: "1em", fontWeight: 600 }}>Case Log</Link>
        <Link to="/about" style={{ fontWeight: 600 }}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-log" element={<CaseLog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

