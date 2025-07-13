import React from 'react';

function SurgeonGreeting({ surgeon }) {
  return (
    <h2 style={{ color: "#4b2e83", marginBottom: "1em" }}>
      Welcome, Dr. {surgeon}!
    </h2>
  );
}

export default SurgeonGreeting;
