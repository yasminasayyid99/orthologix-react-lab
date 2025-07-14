import React from 'react';

function CaseCard({ proc, outcome, comp }) {
  return (
    <div style={{
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: "1em",
      margin: "1em 0",
      background: "#f8f6ff",
      boxShadow: "0 1px 4px #dedcff"
    }}>
      <strong>Procedure:</strong> {proc} <br/>
      <strong>Outcome:</strong> {outcome} <br/>
      <strong>Complication:</strong> {comp || "None"}
    </div>
  );
}

export default CaseCard;
