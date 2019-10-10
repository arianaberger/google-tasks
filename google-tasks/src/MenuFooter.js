import React from 'react';
import {Menu, MoreVert, Add} from '@material-ui/icons';

const MenuFooter = (props) => {

    return (
      <>
      <div className="Col-1"><Menu /></div>
      <div className="Col-2"><Add onClick={() => props.onClick()}/></div>
      <div className="Col-3"><MoreVert /></div>

      </>
    )
}

export default MenuFooter;
