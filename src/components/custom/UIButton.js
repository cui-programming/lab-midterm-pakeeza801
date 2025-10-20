// Question C
/*import React from "react";

function UIButton({ label, onClick, color }) {
  const colors = {
    green: "#2ecc71",
    red: "#e74c3c",
    blue: "#3498db",
  };

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: colors[color] || "#ccc",
        border: "none",
        borderRadius: "8px",
        color: "#fff",
        padding: "6px 12px",
        fontSize: "16px",
        cursor: "pointer",
        margin: "0 5px",
        transition: "0.2s",
      }}
    >
      {label}
    </button>
  );
}

export default UIButton;*/

// Question D
// UIButton.js
/*import React from 'react';

export default function UIButton({ label, onClick, color, style, disabled }) {
  const colors = {
    green: "#10b981", // Tailwind green-500
    red: "#ef4444",   // Tailwind red-500
    blue: "#3b82f6",  // Tailwind blue-500
    gray: "#9ca3af",  // Tailwind gray-400
  };

  const baseStyle = {
    backgroundColor: disabled ? colors.gray : colors[color] || "#ccc",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    padding: "6px 12px",
    fontSize: "16px",
    cursor: disabled ? "not-allowed" : "pointer",
    margin: "0 5px",
    transition: "background-color 0.2s, transform 0.1s",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    ...style,
  };

  return (
    <button
      onClick={onClick}
      style={baseStyle}
      disabled={disabled}
    >
      {label}
    </button>
  );
}*/
