import React from 'react';

const TasksComplete = (props) => {

  const getTasks = () => {
    return props.tasks.filter(task => task.complete)
  }

  const displayTasks = () => {
    return getTasks().map(task => {
      return (
        <>
          <div key={task.task} className="Task-row">
            <div className="Task-cols">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="Check-svg" onClick={() => props.onClick(task.id)}>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <div className="Task-cols">
              {task.task}
            </div>
          </div>
          <div className="Task-divider"></div>
        </>

      )
    })
  }


    return (
      <>
        {getTasks().length != 0 ?
          <>
          <div className="Task-completed-divider"></div>
          <h4>Completed ({getTasks().length})</h4>
          </> :
          null
        }
        <div className="Completed-tasks">{displayTasks()}</div>
      </>
    )
}

export default TasksComplete
