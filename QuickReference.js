import React, { useState } from "react";

const REFS = [
  {
    keyword: "carpal tunnel",
    title: "Carpal Tunnel Release",
    summary: "A procedure to relieve pressure on the median nerve at the wrist.",
    cpt: "64721",
    pearls: [
      "Check for thenar atrophy pre-op.",
      "Warn patient about pillar pain.",
      "Splint for comfort post-op, but encourage early finger motion.",
    ],
    complications: [
      "Nerve injury",
      "Incomplete release",
      "Scar sensitivity"
    ]
  },
  {
    keyword: "acl",
    title: "ACL Reconstruction",
    summary: "Reconstruction of the anterior cruciate ligament in the knee.",
    cpt: "29888",
    pearls: [
      "Confirm diagnosis with Lachman and pivot shift.",
      "Graft choice: autograft vs allograft.",
      "Early motion to avoid stiffness."
    ],
    complications: [
      "Graft failure",
      "Infection",
      "Arthrofibrosis"
    ]
  },
  // Add more reference objects as needed!
];

function QuickReference() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  function handleSearch(e) {
    e.preventDefault();
    const ref = REFS.find(
      r => query.toLowerCase().includes(r.keyword)
    );
    setResult(ref || { notFound: true });
  }

  return (
    <div style={{
      maxWidth: 520,
      margin: "2em auto",
      padding: 20,
      background: "#e6f6ff",
      borderRadius: 14
    }}>
      <h2 style={{ color: "#206090" }}>Quick Surgical Reference Lookup</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: 20 }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type a procedure or diagnosis..."
          style={{ width: "70%", marginRight: 10 }}
        />
        <button>Search</button>
      </form>
      {result && !result.notFound && (
        <div style={{ background: "#fff", padding: 18, borderRadius: 10 }}>
          <h3>{result.title}</h3>
          <p>{result.summary}</p>
          <div><strong>CPT Code:</strong> {result.cpt}</div>
          <div>
            <strong>Clinical Pearls:</strong>
            <ul>
              {result.pearls.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div>
            <strong>Complications:</strong>
            <ul>
              {result.complications.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      )}
      {result && result.notFound && (
        <div style={{ color: "#999" }}>
          No reference found for that search term.
        </div>
      )}
    </div>
  );
}

export default QuickReference;
