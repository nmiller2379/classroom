// Mark this component as a Client Component because it contains interactive logic
"use client";

export default function ClickButton() {
  return (
    <button onClick={() => alert("Hello from the Click Button!")}>
      Click me
    </button>
  );
}

