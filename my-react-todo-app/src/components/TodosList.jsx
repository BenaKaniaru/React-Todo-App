import TodoItem from "./TodoItem";
import styles from "./todoslist.module.css";

export default function TodosList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a, b) => {
    if (a.done === b.done) {
      return a.name.localeCompare(b.name);
    }
    return a.done - b.done; // Unfinished tasks first
  });
  return (
    <div className={styles.list}>
      {todos.length > 0 ? (
        sortedTodos.map((task) => (
          // passes the todo data to the child component (TodoItem)
          <TodoItem
            key={task.name}
            task={task}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      ) : (
        <span style={{ color: "red", textAlign: "center", fontSize: "18px" }}>
          You Currently Have no Scheduled Activities To Do!
        </span>
      )}
    </div>
  );
}
