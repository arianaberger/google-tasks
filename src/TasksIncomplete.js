import React from 'react';

const TasksIncomplete = (props) => {

  const getTasks = () => {
    return props.tasks.filter(task => !task.complete)
  }

  const displayTasks = () => {
    return getTasks().map(task => {
      return (
        <div key={task.id}>
          <div className="Task-row">
            <div className="Task-cols">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="Circle-svg" onClick={() => props.onClick(task.id)}>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <div className="Task-cols">
              {task.task}
            </div>
          </div>
          <div className="Task-divider"></div>
        </div>
      )
    })
  }

    return (
        <div>{displayTasks()}</div>
    )
}

export default TasksIncomplete
