import React from "react";
import styles from "./footer.module.css";

export default function Footer({ todos, inprogressTasks, completedTasks }) {
  return (
    <div className={styles.footer}>
      <span>Total Scheduled Task: {todos.length}</span>
      <span>Tasks currently in progress: {inprogressTasks}</span>
      <span>Completed Task:{completedTasks}</span>
    </div>
  );
}
