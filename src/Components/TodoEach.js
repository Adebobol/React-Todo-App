import { useState } from "react";

function TodoEach({ to }) {
  const [showBin, setShowBin] = useState(true);
  const calender =
    to.date.getDate() +
    "/" +
    (to.date.getMonth() + 1) +
    "/" +
    to.date.getYear();
  const time =
    ("0" + to.date.getHours()).slice(-2) +
    ":" +
    ("0" + to.date.getMinutes()).slice(-2);

  return (
    <div className="todoEach" onMouseOver={() => setShowBin(!showBin)}>
      <div>
        <div>
          <p>{time}</p>
          <h1>{to.taskInput}</h1>
        </div>
        <p>{calender}</p>
      </div>
      {!showBin && <img src="delete.svg" alt=""></img>}
    </div>
  );
}

export default TodoEach;
