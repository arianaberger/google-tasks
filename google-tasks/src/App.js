import React from 'react';
import './App.css';
import TasksContainer from './TasksContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main">
          <h2>My Tasks</h2>
          <TasksContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
