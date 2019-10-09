import React, { Component } from 'react';
import TasksComplete from './TasksComplete';
import TasksIncomplete from './TasksIncomplete';
import Intro from './Intro';

class TasksContainer extends Component {

  constructor() {
    super();
    this.state = {
      tasks: [
        // {name: "Go!", complete: false}
      ]
    }
  }

  onClick = e => {
    const newTasks = [...this.state.tasks]
    const newArr = newTasks.map(task => {
      if (task.name === e) {
        return {
          ...task,
          complete: !task.complete
        }
      } else {
        return task
      }
    })

    this.setState({
      tasks: newArr
    })
  }

  render() {
    return (
      <>
        {this.state.tasks.length === 0 ? <Intro /> :
        <>
        <TasksIncomplete tasks={this.state.tasks} onClick={this.onClick}/>
        <TasksComplete tasks={this.state.tasks} onClick={this.onClick}/>
        </>
      }
      </>
    )
  }
}

export default TasksContainer
