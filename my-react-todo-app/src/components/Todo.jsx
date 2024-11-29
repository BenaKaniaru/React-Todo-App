import React from "react";
import { useState } from "react";
import Form from "./Form";
import TodosList from "./TodosList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const inprogressTasks = todos.filter((todo) => todo.done === false).length;
  const completedTasks = todos.filter((todo) => todo.done === true).length;
  return (
    <div>
      <Footer
        todos={todos}
        inprogressTasks={inprogressTasks}
        completedTasks={completedTasks}
      />
      <Form todos={todos} setTodos={setTodos} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
}
