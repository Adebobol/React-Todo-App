import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TodoForm({ handleAddTask, taskInput, setTaskInput, date, setDate }) {
  return (
    <div className="todoForm">
      <div className="todoFormInner">
        <form onSubmit={handleAddTask}>
          <div className="formEach">
            <label className="formLabel">Your Task</label> <br />
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
          </div>
          <div className="formEach">
            <label className="formLabel">Date</label> <br />
            {/* <input text="text" /> */}
            <DatePicker
              id="date"
              onChange={(date) => setDate(date)}
              selected={date}
              dateFormat="MM/dd/yy"
            />
          </div>
          <button className="todoFormButton" type="submit">
            Add
          </button>
        </form>
        {/* <button className="todoFormButton">Add</button> */}
      </div>
    </div>
  );
}

export default TodoForm;
