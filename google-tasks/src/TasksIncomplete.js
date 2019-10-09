import React from 'react';

const TasksIncomplete = (props) => {

  const getTasks = () => {
    return props.tasks.filter(task => !task.complete)
  }

  const displayTasks = () => {
    return getTasks().map(task => {
      return (
        <div key={task.name}>
        {task.name}
        </div>
      )
    })
  }

    return (
      <div>{displayTasks()}</div>
    )
}

export default TasksIncomplete
