import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';

class AddTaskContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: "New task"
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTask(this.state.task)
  }

  render() {
    return (
      <div className="Add-task">
        <AddTaskForm
          task={this.state.task}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default AddTaskContainer;
