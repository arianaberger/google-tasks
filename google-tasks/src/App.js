import React from 'react';
import './App.css';
import TasksContainer from './TasksContainer';
import MenuFooter from './MenuFooter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main">
        <div className="Add-task-overlay">Hello</div>
          <h2>My Tasks</h2>
          <div className="Tasks">
            <TasksContainer />
          </div>
          <div className="Menu-footer">
            <MenuFooter />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
