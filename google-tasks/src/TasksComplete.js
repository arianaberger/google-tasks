import React from 'react';
import Complete from './images/complete-all-tasks.png';

const TasksComplete = (props) => {

  const getTasks = () => {
    return props.tasks.filter(task => task.complete)
  }

  const displayTaskRows = () => {
    return getTasks().map(task => {
      return (
        <div key={task.id}>
          <div className="Task-row">
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
        </div>
      )
    })
  }

  const displayTasks = () => {
    return (
      <>
      {props.collapse ?
        <div>{collapsedTasks()}</div>
        :
        <>
          <div className="Task-completed-divider"></div>
            <div className="Task-completed-row" onClick={props.divCollapse}>
              <div className="Task-completed-cols">
                <h4>Completed ({getTasks().length})</h4>
              </div>
              <div className="Task-completed-cols">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="Arrow">
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
             </div>
          </div>
          <div className="Completed-tasks">{displayTaskRows()}</div>
        </>
      }
      </>
    )
  }

  const collapsedTasks = () => {
    return (
      <>
        <div className="Task-completed-divider"></div>
          <div className="Task-completed-row" onClick={props.divCollapse}>
            <div className="Task-completed-cols">
              <h4>Completed ({getTasks().length})</h4>
            </div>
            <div className="Task-completed-cols">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="Arrow">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
           </div>
        </div>
        <div className="Task-completed-bottom-border"></div>
      </>
    )
  }

  return (
    <>
      {getTasks().length !== 0 ? <div>{displayTasks()}</div> : null}
      {props.collapse && getTasks().length === props.tasks.length ?
        <>
        <div className="Image-container">
          <img src={Complete} id="Image-complete-tasks" alt="tasks completed"/>
        </div>
        <div className="Text-container">
          <h5>Nicely done!</h5>
          <h6>You've finished all your tasks. Take a second to recharge.</h6>
        </div>
        </>
        : null
      }
    </>
  )
}

export default TasksComplete
