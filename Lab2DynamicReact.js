import React from "react";
import SurgeonGreeting from "./SurgeonGreeting";

function Lab2DynamicReact() {
  return (
    <div>
      {/* Surgeon Greeting */}
      <SurgeonGreeting surgeon="Kim" />

      {/* Rest of your Lab 2 content */}
      <h2>Lab 2: React SPA Demo</h2>
      <p>
        This demo showcases a modern React single-page application for OrthoLogix.
      </p>
      {/* You can add more interactive Lab 2 features here, e.g., a sample patient list, etc. */}
    </div>
  );
}

export default Lab2DynamicReact;
