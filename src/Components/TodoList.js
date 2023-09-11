import TodoEach from "./TodoEach";

function TodoList({ todo }) {
  return (
    <div>
      {todo.map((to) => (
        <TodoEach to={to} key={to.taskInput} />
      ))}
    </div>
  );
}

export default TodoList;
