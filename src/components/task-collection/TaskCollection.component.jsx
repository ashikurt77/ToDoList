import React from "react";

const TaskCollection = ({ taskList, removeTask }) => {
  return (
    <div>
      {taskList.map(task => (
        <ul className="list-group" key={task}>
          <li className="list-group-item" onClick={() => removeTask(task)}>
            {task}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TaskCollection;
