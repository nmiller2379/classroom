import React, { useState } from "react";
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm'; 

export default function TodoListComponent() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Hooks", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  const handleAddTodo = (text) => {
    const newTodoItem = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
  };

  const toggleTodoCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodoCompletion} />
        ))}
      </ul>
    </div>
  );
}
