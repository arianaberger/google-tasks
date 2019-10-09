import React, { Component } from 'react';
import TasksComplete from './TasksComplete';
import TasksIncomplete from './TasksIncomplete';

class TasksContainer extends Component {

  constructor() {
    super();
    this.state = {
      tasks: [
        {name: "Go shopping", complete: false},
        {name: "Workout", complete: false}
      ]
    }
  }

  render() {
    return (
      <>
        <TasksIncomplete tasks={this.state.tasks}/>
        <TasksComplete />
      </>
    )
  }
}

export default TasksContainer
