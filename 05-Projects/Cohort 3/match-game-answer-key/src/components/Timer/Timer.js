import React from "react";

export default function Timer({ minutes, seconds }) {
  return (
    <p className="timer">
      Time remaining: {minutes}:{seconds}
    </p>
  );
}

