import React from "react";

export default function Button({ id, value, handleClick }) {
  return (
    <button id={id} value={value} onClick={handleClick} className="button">
      {value}
    </button>
  );
}
