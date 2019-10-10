import React, { Component } from 'react';
import {Menu, MoreVert, Add} from '@material-ui/icons';

class MenuFooter extends Component {

  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  onClick = e => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  render() {
    return (
      <>
      {this.state.clicked ? <div className="Add-task-overlay">Add Task</div> : null}

      <div className="Col-1"><Menu /></div>
      <div className="Col-2"><Add onClick={() => this.onClick()}/></div>
      <div className="Col-3"><MoreVert /></div>

      </>
    )
  }
}

export default MenuFooter;
