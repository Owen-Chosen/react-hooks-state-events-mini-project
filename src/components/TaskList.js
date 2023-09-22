import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {

  function handleClick(event) {
    setTasks(
      tasks.filter((task) => {
        if (event.target.id === task.text) return false
        else return true
      })
    )
  }

  return (
    <div className="tasks">
      {
        tasks.map((task, index) => {
          return <Task id={index}
           key={index}
            task={task}
             handleClick={handleClick}/>
        })
      }
    </div>
  );
}

export default TaskList;
