import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [task, setTask] = useState({ name: "", done: false });
  function handleSubmit(e) {
    const taskExists = todos.some(
      (todo) =>
        todo.name.trim().toLowerCase() === task.name.trim().toLowerCase()
    );
    e.preventDefault();

    if (task.name.trim() === "") {
      alert("Hey Yoh! Task name cannot be empty. Add a name or Bounce!");
      return;
    } else if (taskExists) {
      alert("Yoh, Check the list again! That Task already exists!");
      return;
    } else {
      setTodos([...todos, task]);
      setTask({ name: "", done: false });
    }
  }

  return (
    <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTask({ name: e.target.value, done: false })}
          type="text"
          value={task.name}
          placeholder="Add a task"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
