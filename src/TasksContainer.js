import React, { Component } from 'react';
import TasksComplete from './TasksComplete';
import TasksIncomplete from './TasksIncomplete';
import Intro from './Intro';

class TasksContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    }
  }

  divCollapse = () => {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render() {
    return (
      <>
        {this.props.tasks.length === 0 ? <Intro /> :
        <>
        <TasksIncomplete tasks={this.props.tasks} onClick={this.props.onClick}/>
        <TasksComplete tasks={this.props.tasks} onClick={this.props.onClick} divCollapse={this.divCollapse} collapse={this.state.collapse}/>
        </>
      }
      </>
    )
  }
}

export default TasksContainer
