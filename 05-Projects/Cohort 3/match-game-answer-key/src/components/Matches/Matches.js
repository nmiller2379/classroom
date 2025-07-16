// Matches.js
import React from "react";

export default function Matches({ matches, totalMatches }) {
  return (
    <p className="matches">
      You have {matches}/{totalMatches} matches so far.
    </p>
  );
}

