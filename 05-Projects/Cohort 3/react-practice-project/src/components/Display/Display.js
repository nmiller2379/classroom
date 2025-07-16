import React from "react";

export default function Display({ displayValue, equation }) {
  return (
    <>
      <div>
        <span>Calculate: {equation}</span>
      </div>
      <input type="text" id="display" value={displayValue} readOnly />
    </>
  );
}
