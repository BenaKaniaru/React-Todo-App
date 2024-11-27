import TodoItem from "./TodoItem";
import styles from "./todoslist.module.css";

export default function TodosList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.length > 0 ? (
        todos.map((task) => (
          // passes the todo data to the child component (TodoItem)
          <TodoItem key={task} task={task} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <span style={{ color: "red", textAlign: "center", fontSize: "18px" }}>
          You Currently Have no Scheduled Activities To Do!
        </span>
      )}
    </div>
  );
}
