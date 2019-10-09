import React from 'react';
import {FiberManualRecordOutlined} from '@material-ui/icons';

const TasksIncomplete = (props) => {

  const getTasks = () => {
    return props.tasks.filter(task => !task.complete)
  }

  const displayTasks = () => {
    return getTasks().map(task => {
      return (
        <div key={task.name}>
          <FiberManualRecordOutlined onClick={() => props.onClick(task.name)} />
          {task.name}
        </div>
      )
    })
  }

    return (
      <>
        <h4>Incomplete</h4>
        <div>{displayTasks()}</div>
      </>
    )
}

export default TasksIncomplete
