import React from "react";
import styles from "./todoitem.module.css";

export default function TodoItem({ task, todos, setTodos }) {
  if (!task || task.trim() === "") {
    return null;
  }

  function handleDelete(task) {
    setTodos(
      todos.filter((todo) => {
        return todo !== task;
      })
    );
  }

  //const { todo } = props;
  //receives todo data from the parent component (TodoItem) through props(destructured)
  return (
    <div className={styles.item}>
      <div className={styles.itemContainer}>
        <div className={styles.block}></div>
        <div className={styles.itemName}>{task} </div>
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
