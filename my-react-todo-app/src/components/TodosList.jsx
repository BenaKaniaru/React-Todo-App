import TodoItem from "./TodoItem";

export default function TodosList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        // passes the todo data to the child component (TodoItem)
        <TodoItem key={todo} todo={todo} />
      ))}
    </div>
  );
}
