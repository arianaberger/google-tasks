import React from 'react';

const AddTaskForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      <div>
        <input value={props.task} name="task" onChange={props.handleOnChange} className="Add-task-input"></input>
      </div>

      <div className="Add-task-form">
        <div className="Add-task-cols1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="Notes-svg">
            <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"/>
            <path fill="none" d="M0 0h24v24H0V0z"/>
          </svg>
        </div>

        <div className="Add-task-cols1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="Event-svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
          </svg>
        </div>

        <div className="Add-task-cols2">
          <button type="submit" className="Submit-button">Save</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default AddTaskForm;
