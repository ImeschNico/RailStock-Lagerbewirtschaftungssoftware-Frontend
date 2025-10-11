import React from "react";

export const Dropdown = ({ label, value, onChange, options }) => {
  return (
    <div>
      <label>{label}: </label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">---Alle---</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
