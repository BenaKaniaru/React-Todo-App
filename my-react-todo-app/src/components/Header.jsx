import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>Kaniaru's Todo List</div>;
    </div>
  );
}
