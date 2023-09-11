import { useEffect, useState } from "react";
import TodoPage from "./Components/TodoPage";
import TodoForm from "./Components/TodoForm";
import AddTask from "./Components/AddTask";

function App() {
  const [change, setChange] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [date, setDate] = useState(new Date());
  const [todo, setTodo] = useState([]);
  const todoAll = {
    taskInput,
    date,
  };
  function addTask() {
    setChange(!change);
  }

  function addTodo(e) {
    e.preventDefault();
    setChange(!change);
    setTodo((todo) => [...todo, todoAll]);
    setTaskInput("");
  }

  return (
    <div className="app">
      {change ? (
        <TodoForm
          handleAddTask={addTodo}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          date={date}
          setDate={setDate}
        />
      ) : (
        <AddTask change={change} handleAddTask={addTask} />
      )}
      <TodoPage todo={todo} />
    </div>
  );
}

export default App;
