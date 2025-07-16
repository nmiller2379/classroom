import React from "react";

export default function Input({ label, value, onChange, name }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} name={name} />
    </div>
  );
}
