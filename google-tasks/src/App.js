import React, { Component } from 'react';
import './App.css';
import TasksContainer from './TasksContainer';
import MenuFooter from './MenuFooter'
import AddTaskContainer from './AddTaskContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: 1,
      clicked: false,
      tasks: [
        // {task: "Go!", complete: false, id: 1}
      ]
    }
  }

  onClickAddTask = e => {
    console.log("clicked")
    this.setState({
      clicked: !this.state.clicked
    })
  }

  onClickCompleteTasks = e => {
    const newTasks = [...this.state.tasks]
    const newArr = newTasks.map(task => {
      if (task.id === e) {
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

  createTask = task => {
    this.setState({
      tasks: [...this.state.tasks, {task: task, complete: false, id: this.state.counter}],
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-main">
            {this.state.clicked ?
              <>
                <div className="Add-task-overlay" onClick={this.onClickAddTask}></div>
                <AddTaskContainer tasks={this.state.tasks} createTask={this.createTask} />
              </> :
              null
            }

            <h2>My Tasks</h2>
            <div className="Tasks">
              <TasksContainer onClick={this.onClickCompleteTasks} tasks={this.state.tasks} />
            </div>
            <div className="Menu-footer">
              <MenuFooter onClick={this.onClickAddTask} />
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
