import React, { useState } from "react";
import "./escalate.css";

const Escalate = () => {
  const [sections, setSections] = useState([
    { id: 1, name: "Conversation", visible: true, active: true },
    { id: 2, name: "Address Update", visible: true, active: false },
    { id: 3, name: "Fee Reversal", visible: true, active: false },
    { id: 4, name: "Retention", visible: true, active: false },
  ]);

  const minimizeSection = (id) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, visible: false } : section
      )
    );
  };

  const setActiveSection = (id) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id
          ? { ...section, active: true }
          : { ...section, active: false }
      )
    );
  };

  return (
    <div className="escalte-container">
      <div className="sections">
        {sections.map(
          (section) =>
            section.visible && (
              <div
                className={`section ${section.active ? "active" : ""}`}
                key={section.id}
                onClick={() => setActiveSection(section.id)}
              >
                <span>{section.name}</span>
                <button
                  className="close-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering setActiveSection
                    minimizeSection(section.id);
                  }}
                >
                  ×
                </button>
              </div>
            )
        )}
      </div>
      <button className="escalate-btn">Escalate</button>
    </div>
  );
};

export default Escalate;
