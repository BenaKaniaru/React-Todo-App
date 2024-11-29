import React from "react";
import styles from "./todoitem.module.css";

export default function TodoItem({ task, todos, setTodos }) {
  if (!task || task.name.trim() === "") {
    return null;
  }

  function handleDelete(task) {
    setTodos(
      todos.filter((todo) => {
        return todo.name !== task.name;
      })
    );
  }

  function handleClick(task) {
    const newArray = todos.map((todo) =>
      todo.name === task.name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const className = task.done ? styles.taskCompleted : "";

  //const { todo } = props;
  //receives todo data from the parent component (TodoItem) through props(destructured)
  return (
    <div className={styles.item}>
      <div className={styles.itemContainer}>
        <div className={styles.block}></div>
        <div className={styles.itemName}>
          <span className={className} onClick={() => handleClick(task)}>
            {task.name}
          </span>
        </div>
        <button
          className={styles.deleteButton}
          onClick={() => handleDelete(task)}
        >
          Delete
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
