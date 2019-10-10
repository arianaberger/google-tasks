import React from 'react';
import {Notes, Event} from '@material-ui/icons';

const AddTask = () => {
  return (
    <div className="Add-task">
      <input value="New task"></input>
      <Notes />
      <Event />
      Save
    </div>
  )
}

export default AddTask;
