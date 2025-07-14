import React, { useState, useEffect } from "react";

function CaseLog() {
  const [cases, setCases] = useState([]);
  const [input, setInput] = useState("");

  // Fetch cases from API (using JSONPlaceholder todos as mock cases)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data => setCases(data));
  }, []);

  // Add a new "case"
  function addCase(e) {
    e.preventDefault();
    if (input.trim() === "") return;
    setCases([...cases, { title: input, completed: false, id: Date.now() }]);
    setInput("");
  }

  return (
    <div style={{ maxWidth: 450, margin: "2em auto" }}>
      <h2>OrthoLogix: Case Log (API + My Cases)</h2>
      <form onSubmit={addCase} style={{ marginBottom: "1.5em" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Log a new surgical case"
        />
        <button>Add Case</button>
      </form>
      <ul>
        {cases.map(item => (
          <li key={item.id}>
            {item.title} {item.completed ? "✅" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CaseLog;
