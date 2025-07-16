import React, { useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    onAddTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
