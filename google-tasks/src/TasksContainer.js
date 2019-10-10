import React from 'react';
import TasksComplete from './TasksComplete';
import TasksIncomplete from './TasksIncomplete';
import Intro from './Intro';

const TasksContainer = (props) => {

  return (
    <>
      {props.tasks.length === 0 ? <Intro /> :
      <>
      <TasksIncomplete tasks={props.tasks} onClick={props.onClick}/>
      <TasksComplete tasks={props.tasks} onClick={props.onClick}/>
      </>
    }
    </>
  )
}

export default TasksContainer
