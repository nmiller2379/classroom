// Card.js
import React from "react";

export default function Card({ src }) {
  return (
    <div className="card">
      <img src={src} alt="Card" />
    </div>
  );
}
