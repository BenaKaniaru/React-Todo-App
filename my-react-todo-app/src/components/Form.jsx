import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Hey Yoh! Task name cannot be empty. Add a name or Bounce!");
    } else {
      setTodos([...todos, task]);
      setTask("");
    }
  }
  return (
    <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          value={task}
          placeholder="Add a task"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
