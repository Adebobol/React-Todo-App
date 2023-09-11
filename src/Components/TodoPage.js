import { useState } from "react";
import TodoList from "./TodoList";

function TodoPage({ todo }) {
  const [burgerClick, setBurgerClick] = useState(false);

  return (
    <div className="todoPage">
      <div className="todoPageInner">
        <div className="todoPageNav">
          <label onClick={() => setBurgerClick(!burgerClick)}>
            <img src="hamburger.svg" alt=""></img>
          </label>
          {burgerClick ? (
            <select onChange={console.log("Working")}>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Deleted">Deleted</option>
            </select>
          ) : (
            ""
          )}
        </div>
        <div>
          {todo.length > 0 ? (
            <TodoList todo={todo} />
          ) : (
            <h3 className="todoPageMessage">Your Todo is currently Empty.</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
