import React from "react";

export default function Editor({ markdown, handleChange }) {
  return (
    <div className="editor-container">
      <textarea id="editor" value={markdown} onChange={handleChange} />
    </div>
  );
}
