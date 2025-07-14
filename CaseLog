import React, { useState, useEffect } from "react";

// For Lab 3, we'll fetch demo "cases" from an API, but use custom fields for new cases.
function CaseLog() {
  const [cases, setCases] = useState([]);
  const [procedure, setProcedure] = useState("");
  const [outcome, setOutcome] = useState("");
  const [complication, setComplication] = useState("");
  const [patient, setPatient] = useState("");
  const [error, setError] = useState("");

  // Fetch demo "cases" from API (using todos as mock cases)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data =>
        setCases(
          data.map((item, i) => ({
            id: item.id,
            patient: `Patient #${100 + i}`,
            procedure: `Procedure #${i + 1}`,
            outcome: item.completed ? "Recovered" : "Pending",
            complication: item.completed ? "None" : "Monitor",
          }))
        )
      );
  }, []);

  function addCase(e) {
    e.preventDefault();
    if (!patient || !procedure || !outcome) {
      setError("Patient, procedure, and outcome are required.");
      return;
    }
    setCases([
      ...cases,
      {
        id: Date.now(),
        patient,
        procedure,
        outcome,
        complication: complication || "None"
      }
    ]);
    setPatient("");
    setProcedure("");
    setOutcome("");
    setComplication("");
    setError("");
  }

  return (
    <div style={{
      maxWidth: 520,
      margin: "2em auto",
      background: "#f6f8ff",
      padding: "2em",
      borderRadius: 14,
      boxShadow: "0 4px 16px #b6b4e7"
    }}>
      <h2 style={{ color: "#4b2e83" }}>OrthoLogix: Surgical Case Log</h2>
      <form onSubmit={addCase} style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        <input
          value={patient}
          onChange={e => setPatient(e.target.value)}
          placeholder="Patient Name or ID"
        />
        <input
          value={procedure}
          onChange={e => setProcedure(e.target.value)}
          placeholder="Procedure (e.g., ACL Reconstruction)"
        />
        <input
          value={outcome}
          onChange={e => setOutcome(e.target.value)}
          placeholder="Outcome (e.g., Recovered, In Progress)"
        />
        <input
          value={complication}
          onChange={e => setComplication(e.target.value)}
          placeholder="Complication (optional)"
        />
        <button>Add Case</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
      <div>
        <h3 style={{ color: "#4b2e83" }}>Logged Cases</h3>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          borderRadius: 10,
          overflow: "hidden"
        }}>
          <thead style={{ background: "#4b2e83", color: "#fff" }}>
            <tr>
              <th style={{ padding: 8 }}>Patient</th>
              <th>Procedure</th>
              <th>Outcome</th>
              <th>Complication</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c, i) => (
              <tr key={c.id || i}>
                <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>{c.patient}</td>
                <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>{c.procedure}</td>
                <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>{c.outcome}</td>
                <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>{c.complication}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {cases.length === 0 && <div style={{ color: "#888" }}>No cases logged yet.</div>}
      </div>
    </div>
  );
}

export default CaseLog;
