import React, { Component } from 'react';
import './App.css';
import TasksContainer from './TasksContainer';
import MenuFooter from './MenuFooter'
import AddTask from './AddTask';

class App extends Component {

  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  onClick = e => {
    console.log("clicked")
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-main">
            {this.state.clicked ? <><div className="Add-task-overlay"></div><AddTask /></> : null}


            <h2>My Tasks</h2>
            <div className="Tasks">
              <TasksContainer />
            </div>
            <div className="Menu-footer">
              <MenuFooter onClick={this.onClick} />
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
