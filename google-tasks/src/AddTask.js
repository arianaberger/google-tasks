import React from 'react';
import {Notes, Event} from '@material-ui/icons';

const AddTask = (props) => {
  return (
    <div className="Add-task">
      <input value="New task" name="task"></input>
      <Notes />
      <Event />
      <button>Save</button>
    </div>
  )
}

export default AddTask;
