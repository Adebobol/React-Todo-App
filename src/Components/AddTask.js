function AddTask({ handleAddTask }) {
  return (
    <div className="addTask">
      <div className="addTaskInner">
        <div className="addTodoNav">
          <p>Welcome, Adepoju</p>
          <h1>Todo</h1>
        </div>

        <div className="addTodoMessage">
          <p>Add a task to get started</p>
          <button className="addTaskButton" onClick={handleAddTask}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
