import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((todo) => (
        // passes the todo data to the child component (TodoItem)
        <TodoItem key={todo} todo={todo} />
      ))}
    </div>
  );
}
