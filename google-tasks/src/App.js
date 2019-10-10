import React, { Component } from 'react';
import './App.css';
import TasksContainer from './TasksContainer';
import MenuFooter from './MenuFooter'
import AddTask from './AddTask';

class App extends Component {

  constructor() {
    super();
    this.state = {
      clicked: false,
      tasks: [
        {task: "Go!", complete: false}
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
      if (task.task === e) {
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
      <div className="App">
        <header className="App-header">
          <div className="App-main">
            {this.state.clicked ?
              <>
                <div className="Add-task-overlay" onClick={this.onClickAddTask}></div>
                <AddTask tasks={this.state.tasks}/>
              </> :
              null
            }

            <h2>My Tasks</h2>
            <div className="Tasks">
              <TasksContainer onClick={this.onClickCompleteTasks} tasks={this.state.tasks}/>
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
