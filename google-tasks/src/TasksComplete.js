import React from 'react';
import {DoneOutlined} from '@material-ui/icons';

const TasksComplete = (props) => {

  const getTasks = () => {
    return props.tasks.filter(task => task.complete)
  }

  const displayTasks = () => {
    return getTasks().map(task => {
      return (
        <div key={task.task} className="Task-row">
          <DoneOutlined onClick={() => props.onClick(task.id)} />
          {task.task}
          <div className="Task-divider"></div>
        </div>
      )
    })
  }


    return (
      <>
        <h4>Complete</h4>
        <div className="Completed-tasks">{displayTasks()}</div>
      </>
    )
}

export default TasksComplete
