import React from 'react'

export default function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
    </li>
  );
}
