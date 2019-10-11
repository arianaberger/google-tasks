import React from 'react';
import {Notes, Event} from '@material-ui/icons';

const AddTaskForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      <input value={props.task} name="task" onChange={props.handleOnChange}></input>
      <Notes />
      <Event />
      <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default AddTaskForm;
